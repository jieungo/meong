
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', { //mysql에는 users 테이블 생성
        //id가 기본적으로 들어있다
        email: {
            type: DataTypes.STRING(30), //string, text, boolean, integer, float, datetime
            allowNull: false, // 필수
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
        },
        password: {
            type: DataTypes.STRING(100), //비밀번호는 암호화하면 길이가 많이 길어짐. 넉넉하게 100글자 해놓음
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8', //한글저장
        collaate: 'utf8_general_ci',
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post); //한 사람이 여러개의 포스트를 가질 수 있다
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'}); 
        //중간에 연결해주는 테이블의 이름 정할 수 있다. as로 별칭 정해줘야 헷갈리지 않는다
        //다대다 관계는 무조건 중간에 테이블이 생기고 검색을 할 수 있도록 도와준다.
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'}); //내가 팔로잉하는 사람 찾으려면 나를 먼저 찾아야함.
        //같은 user 테이블이면 서로 userId를 갖게되어 foreignkey로 다르게 지정해주기
        //제로가 팔로잉하고 있는 사람 찾으려면? 제로 먼저 찾고, 반대쪽(팔로잉하는 사람) 찾아야한다. 먼저 찾는 걸 적어줘야함
    };
    return User;
}