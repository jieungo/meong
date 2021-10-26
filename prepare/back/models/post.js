
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { //mysql에는 users 테이블 생성
        //id가 기본적으로 들어있다
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //이모티콘 저장
        collaate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); //게시글은 작성자에게 속해있다 //포스트의 작성자
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'}); // 다대다 관계. 서로 속할 수 있다
        db.Post.hasMany(db.Comment); //하나의 게시글에 댓글은 여러개 존재 가능
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers'}) //포스트에 좋아요 누른 사람들
    };
    return Post;
}