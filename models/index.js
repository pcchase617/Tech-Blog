const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments')

Users.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

module.exports = { Users, Posts, Comments };
