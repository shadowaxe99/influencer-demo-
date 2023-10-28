const mongoose = require('mongoose');

const SocialMediaSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true
  },
  followers: {
    type: Number,
    required: true
  },
  engagementRate: {
    type: Number,
    required: true
  },
  postsPerDay: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('SocialMedia', SocialMediaSchema);