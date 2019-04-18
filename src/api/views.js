//Import mongoose
const mongoose = require('mongoose');

// Remove annoying deprication warning
mongoose.set('useFindAndModify', false);

// Deine soft schema
const viewSchema = mongoose.Schema({
  home:{
    type: Number,
    require: true
  },
  soft:{
    type: Number,
    require: true
  },
  chat:{
    type: Number,
    require: true
  },
  gigs:{
    type: Number,
    require: true
  },
  blog:{
    type: Number,
    require: true
  },
  author:{
    type: Number,
    require: true
  },
  donor:{
    type: Number,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const View = module.exports = mongoose.model('View', viewSchema, "views");

// Get posts
module.exports.getViews = (callback, limit) => {
  View.find(callback).limit(limit);
}

// Update views
module.exports.updateViews = (id, updated, options, callback) => {
  var query = {_id: id};
  var update = {
    home: updated.home,
    soft: updated.soft,
    chat: updated.chat,
    gigs: updated.gigs,
    blog: updated.blog,
    author: updated.author,
    donor: updated.donor
  };
  View.findOneAndUpdate(query, update, options, callback);
}