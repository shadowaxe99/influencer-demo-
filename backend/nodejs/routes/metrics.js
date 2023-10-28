```javascript
const express = require('express');
const router = express.Router();
const Metrics = require('../models/Metrics');

// Get all metrics
router.get('/', async (req, res) => {
    try {
        const metrics = await Metrics.find();
        res.json(metrics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one metric
router.get('/:id', getMetric, (req, res) => {
    res.json(res.metric);
});

// Create one metric
router.post('/', async (req, res) => {
    const metric = new Metrics({
        name: req.body.name,
        value: req.body.value
    });

    try {
        const newMetric = await metric.save();
        res.status(201).json(newMetric);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getMetric(req, res, next) {
    let metric;
    try {
        metric = await Metrics.findById(req.params.id);
        if (metric == null) {
            return res.status(404).json({ message: 'Cannot find metric' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.metric = metric;
    next();
}

module.exports = router;
```