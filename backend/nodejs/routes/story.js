```javascript
const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

// Get all stories
router.get('/', async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one story
router.get('/:id', getStory, (req, res) => {
    res.json(res.story);
});

// Create one story
router.post('/', async (req, res) => {
    const story = new Story({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const newStory = await story.save();
        res.status(201).json(newStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getStory(req, res, next) {
    let story;
    try {
        story = await Story.findById(req.params.id);
        if (story == null) {
            return res.status(404).json({ message: 'Cannot find story' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.story = story;
    next();
}

module.exports = router;
```