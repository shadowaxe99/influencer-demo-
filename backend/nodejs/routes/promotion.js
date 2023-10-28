```javascript
const express = require('express');
const router = express.Router();
const Promotion = require('../models/Promotion');

// Get all promotions
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one promotion
router.get('/:id', getPromotion, (req, res) => {
    res.json(res.promotion);
});

// Create one promotion
router.post('/', async (req, res) => {
    const promotion = new Promotion({
        title: req.body.title,
        description: req.body.description,
        strategy: req.body.strategy
    });

    try {
        const newPromotion = await promotion.save();
        res.status(201).json(newPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getPromotion(req, res, next) {
    let promotion;
    try {
        promotion = await Promotion.findById(req.params.id);
        if (promotion == null) {
            return res.status(404).json({ message: 'Cannot find promotion' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.promotion = promotion;
    next();
}

module.exports = router;
```