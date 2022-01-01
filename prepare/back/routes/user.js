const express = require('express');
const bcrypt = require('bcrypt');
const { User, Post} = require('../models');
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');


const router = express.Router();

//POST/user
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr)
                return next(loginErr)
            }
            const fullUserWithoutPassword = await User.findOne({
                where: {id: user.id},
                attributes:{
                    exclude: ['password'] //전체 데이터 중 비밀번호만 빼고 받기
                },
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings', //모델에서 as 사용해서 include할때도 as!
                }, {
                    model: User,
                    as: 'Followers',
                }]
            })
            return res.status(200).json(fullUserWithoutPassword);
        })
    })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => { //POST/user/
    try{
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12); //10~13까지 있다
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('OK!');
    } catch (error) {
        console.error(error);
        next(error); //에러를 한방에 처리. status 500
    }
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
})

module.exports = router;