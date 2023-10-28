```javascript
const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
  talentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Talent',
    required: true
  },
  strategy: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  expectedReach: {
    type: Number,
    required: true
  },
  actualReach: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Promotion', PromotionSchema);
```