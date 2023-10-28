```javascript
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Get all videos
router.get('/', async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one video
router.get('/:id', getVideo, (req, res) => {
    res.json(res.video);
});

// Create one video
router.post('/', async (req, res) => {
    const video = new Video({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    });

    try {
        const newVideo = await video.save();
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getVideo(req, res, next) {
    let video;
    try {
        video = await Video.findById(req.params.id);
        if (video == null) {
            return res.status(404).json({ message: 'Cannot find video' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.video = video;
    next();
}

module.exports = router;
```