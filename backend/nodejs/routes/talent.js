```javascript
const express = require('express');
const router = express.Router();
const Talent = require('../models/Talent');

// Get all talents
router.get('/', async (req, res) => {
    try {
        const talents = await Talent.find();
        res.json(talents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one talent
router.get('/:id', getTalent, (req, res) => {
    res.json(res.talent);
});

// Create one talent
router.post('/', async (req, res) => {
    const talent = new Talent({
        name: req.body.name,
        expertise: req.body.expertise,
        experience: req.body.experience
    });

    try {
        const newTalent = await talent.save();
        res.status(201).json(newTalent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one talent
router.patch('/:id', getTalent, async (req, res) => {
    if (req.body.name != null) {
        res.talent.name = req.body.name;
    }
    if (req.body.expertise != null) {
        res.talent.expertise = req.body.expertise;
    }
    if (req.body.experience != null) {
        res.talent.experience = req.body.experience;
    }
    try {
        const updatedTalent = await res.talent.save();
        res.json(updatedTalent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one talent
router.delete('/:id', getTalent, async (req, res) => {
    try {
        await res.talent.remove();
        res.json({ message: 'Deleted Talent' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getTalent(req, res, next) {
    let talent;
    try {
        talent = await Talent.findById(req.params.id);
        if (talent == null) {
            return res.status(404).json({ message: 'Cannot find talent' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.talent = talent;
    next();
}

module.exports = router;
```