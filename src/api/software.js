//Import mongoose
const mongoose = require('mongoose');

// Remove annoying deprication warning
mongoose.set('useFindAndModify', false);

// Deine soft schema
const softSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  source_url:{
    type: String,
    require: true
  },
  release_url:{
    type: String,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Soft = module.exports = mongoose.model('Soft', softSchema, "soft");

// Get products
module.exports.getSoft = (callback, limit) => {
  Soft.find(callback).limit(limit);
}