const mongoose = require('mongoose');

// making db schema with mongoose
const ProfileAboutSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    required: true
  }
});

// first argument is the name of the model on mongo atlas
module.exports = mongoose.model('Profile', ProfileAboutSchema);
