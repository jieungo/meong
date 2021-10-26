
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { //mysql에는 users 테이블 생성
        //id가 기본적으로 들어있다
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8', //한글저장
        collaate: 'utf8_general_ci',
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User); //belongsTo가 있으면 id 생성된다 
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}