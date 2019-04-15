//Import mongoose
const mongoose = require('mongoose');

// Remove annoying deprication warning
mongoose.set('useFindAndModify', false);

// Deine soft schema
const postSchema = mongoose.Schema({
  author:{
    type: String,
    require: true
  },
  body:{
    type: String,
    require: true
  },
  comments:{
    type: Array
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Post = module.exports = mongoose.model('Post', postSchema, "posts");

// Get posts
module.exports.getPosts = (callback, limit) => {
  Post.find(callback).limit(limit);
}

// Add post
module.exports.addPost = (post, callback) => {
  Post.create(post, callback);
}