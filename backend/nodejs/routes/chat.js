```javascript
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// Get all chats
router.get('/', async (req, res) => {
    try {
        const chats = await Chat.find();
        res.json(chats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one chat
router.get('/:id', getChat, (req, res) => {
    res.json(res.chat);
});

// Create one chat
router.post('/', async (req, res) => {
    const chat = new Chat({
        message: req.body.message,
        sender: req.body.sender,
        timestamp: req.body.timestamp
    });

    try {
        const newChat = await chat.save();
        res.status(201).json(newChat);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getChat(req, res, next) {
    let chat;
    try {
        chat = await Chat.findById(req.params.id);
        if (chat == null) {
            return res.status(404).json({ message: 'Cannot find chat' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.chat = chat;
    next();
}

module.exports = router;
```