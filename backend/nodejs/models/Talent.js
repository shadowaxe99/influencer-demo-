const mongoose = require('mongoose');

const TalentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  profileImage: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  socialMediaLinks: {
    type: Map,
    of: String
  },
  performanceMetrics: {
    type: Map,
    of: Number
  }
});

module.exports = mongoose.model('Talent', TalentSchema);