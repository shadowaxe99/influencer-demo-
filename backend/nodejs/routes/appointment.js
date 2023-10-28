```javascript
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one appointment
router.get('/:id', getAppointment, (req, res) => {
    res.json(res.appointment);
});

// Create one appointment
router.post('/', async (req, res) => {
    const appointment = new Appointment({
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description
    });

    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one appointment
router.patch('/:id', getAppointment, async (req, res) => {
    if (req.body.title != null) {
        res.appointment.title = req.body.title;
    }
    if (req.body.date != null) {
        res.appointment.date = req.body.date;
    }
    if (req.body.time != null) {
        res.appointment.time = req.body.time;
    }
    if (req.body.description != null) {
        res.appointment.description = req.body.description;
    }
    try {
        const updatedAppointment = await res.appointment.save();
        res.json(updatedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one appointment
router.delete('/:id', getAppointment, async (req, res) => {
    try {
        await res.appointment.remove();
        res.json({ message: 'Deleted Appointment' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getAppointment(req, res, next) {
    let appointment;
    try {
        appointment = await Appointment.findById(req.params.id);
        if (appointment == null) {
            return res.status(404).json({ message: 'Cannot find appointment' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.appointment = appointment;
    next();
}

module.exports = router;
```