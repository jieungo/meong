const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
    
passportConfig();

app.use(cors({
    origin: true,
    credentials: false,
}));
app.use(express.json()); //json 형식의 데이터를 req.body에 넣어준다
app.use(express.urlencoded({extended: true})); //form은 url형식으로 옴. 그래서 form 처리
//data의 객체를 해석해서 req.body에 넣어준다
//미들웨어는 위에서부터 아래로 실행되어서 위에다 작성해줘야한다
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize('nolmeong-simeongsecret'));
app.use(passport.session());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/api', (req, res) => {
    res.send('hello api');
});

app.get('/api/posts', (req, res) => {
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello'},
        {id: 3, content: 'hello'}
    ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!!');
})