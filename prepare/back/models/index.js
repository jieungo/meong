const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config)//시퀄라이즈가 노드와 마이에스큐엘 연결해준다

db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => { //반복문 돌면서 associate 실행 -> 관계들 연결
  if (db[modelName].associate) {
    db[modelName].associate(db); 
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
