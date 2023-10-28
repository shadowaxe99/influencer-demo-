```javascript
const express = require('express');
const router = express.Router();
const SocialMedia = require('../models/SocialMedia');

// Get all social media metrics
router.get('/', async (req, res) => {
    try {
        const socialMediaMetrics = await SocialMedia.find();
        res.json(socialMediaMetrics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one social media metric
router.get('/:id', getSocialMediaMetric, (req, res) => {
    res.json(res.socialMediaMetric);
});

// Create one social media metric
router.post('/', async (req, res) => {
    const socialMediaMetric = new SocialMedia({
        name: req.body.name,
        value: req.body.value
    });

    try {
        const newSocialMediaMetric = await socialMediaMetric.save();
        res.status(201).json(newSocialMediaMetric);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getSocialMediaMetric(req, res, next) {
    let socialMediaMetric;
    try {
        socialMediaMetric = await SocialMedia.findById(req.params.id);
        if (socialMediaMetric == null) {
            return res.status(404).json({ message: 'Cannot find social media metric' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.socialMediaMetric = socialMediaMetric;
    next();
}

module.exports = router;
```