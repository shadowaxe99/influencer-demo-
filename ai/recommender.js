```javascript
// Importing required libraries
const mongoose = require('mongoose');
const Talent = require('../backend/nodejs/models/Talent');

// Defining the recommender function
const recommendPromotion = async (talentId) => {
  try {
    // Fetching the talent data from the database
    const talent = await Talent.findById(talentId);

    // Defining the recommendation logic
    let recommendation;
    if (talent.experienceYears > 5) {
      recommendation = 'Consider for a senior role';
    } else if (talent.skills.includes('AI') || talent.skills.includes('Machine Learning')) {
      recommendation = 'Consider for a tech lead role';
    } else {
      recommendation = 'Consider for a junior role';
    }

    // Returning the recommendation
    return recommendation;
  } catch (error) {
    console.error(`Error in recommending promotion: ${error}`);
  }
};

module.exports = recommendPromotion;
```