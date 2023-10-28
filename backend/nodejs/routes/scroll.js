const express = require('express');
const router = express.Router();
const Scroll = require('../models/Scroll');

// Get all scrolls
router.get('/', async (req, res) => {
    try {
        const scrolls = await Scroll.find();
        res.json(scrolls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one scroll
router.get('/:id', getScroll, (req, res) => {
    res.json(res.scroll);
});

// Create one scroll
router.post('/', async (req, res) => {
    const scroll = new Scroll({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newScroll = await scroll.save();
        res.status(201).json(newScroll);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one scroll
router.patch('/:id', getScroll, async (req, res) => {
    if (req.body.name != null) {
        res.scroll.name = req.body.name;
    }

    if (req.body.description != null) {
        res.scroll.description = req.body.description;
    }

    try {
        const updatedScroll = await res.scroll.save();
        res.json(updatedScroll);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one scroll
router.delete('/:id', getScroll, async (req, res) => {
    try {
        await res.scroll.remove();
        res.json({ message: 'Deleted Scroll' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function for getting scroll object by ID
async function getScroll(req, res, next) {
    let scroll;
    try {
        scroll = await Scroll.findById(req.params.id);
        if (scroll == null) {
            return res.status(404).json({ message: 'Cannot find scroll' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.scroll = scroll;
    next();
}

module.exports = router;