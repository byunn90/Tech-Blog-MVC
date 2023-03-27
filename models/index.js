const User = require("./models/User");
const Post = require("./models/Post");

// Define associations between models here
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
