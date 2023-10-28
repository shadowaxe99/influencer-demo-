const mongoose = require('mongoose');

const MetricsSchema = new mongoose.Schema({
  talentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Talent',
    required: true
  },
  totalEngagements: {
    type: Number,
    required: true
  },
  totalFollowers: {
    type: Number,
    required: true
  },
  totalLikes: {
    type: Number,
    required: true
  },
  totalShares: {
    type: Number,
    required: true
  },
  totalComments: {
    type: Number,
    required: true
  },
  totalViews: {
    type: Number,
    required: true
  },
  totalImpressions: {
    type: Number,
    required: true
  },
  totalReach: {
    type: Number,
    required: true
  },
  totalClicks: {
    type: Number,
    required: true
  },
  totalConversions: {
    type: Number,
    required: true
  },
  totalRevenue: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Metrics', MetricsSchema);