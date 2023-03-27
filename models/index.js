const User = require("../models/user");
const Post = require("../models/post");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Post };
