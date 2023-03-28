const User = require("../models/user");
const Post = require("../models/post");

// Associate User with Post
User.hasMany(Post, {
  foreignKey: "user_id", // use existing id field in User model as foreign key in Post model
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id", // use existing id field in User model as foreign key in Post model
});

module.exports = { User, Post };
