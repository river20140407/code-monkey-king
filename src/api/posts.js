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
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Post = module.exports = mongoose.model('Post', postSchema, "posts");

// Get products
module.exports.getPosts = (callback, limit) => {
  Post.find(callback).limit(limit);
}