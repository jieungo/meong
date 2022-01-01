exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next(); 
        // next()는 두가지로 활용 가능
        // next의 ()안에 무언가를 작성하면 에러처리
        // 아무것도 작성하지 않으면 다음 미들웨어로 이동 
    } else {
        res.status(401).send('로그인이 필요합니다.');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
    }
};