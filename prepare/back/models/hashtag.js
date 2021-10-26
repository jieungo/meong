
module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { //mysql에는 users 테이블 생성
        //id가 기본적으로 들어있다
        name: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
    }, {
        charset: 'utf8', //한글저장
        collaate: 'utf8_general_ci',
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});
    };

    //유저와 유저정보는? 일대일 관계이다. hasOne과 belongsTo.
    //belongsTo가 생기는 곳에 id가 생긴다.
    
    return Hashtag;
}