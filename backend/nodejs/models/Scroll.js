```javascript
const mongoose = require('mongoose');

const ScrollSchema = new mongoose.Schema({
  sectionId: {
    type: String,
    required: true
  },
  sectionName: {
    type: String,
    required: true
  },
  sectionContent: {
    type: String,
    required: true
  },
  nextSectionId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Scroll', ScrollSchema);
```