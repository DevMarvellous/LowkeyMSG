import express from 'express';
import Message from '../models/Message.js';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public: send anonymous message to a user by profileSlug
router.post('/send/:profileSlug', async (req, res) => {
  try {
    const { profileSlug } = req.params;
    const { content } = req.body;

    if (!content || content.trim().length === 0) {
      return res.status(400).json({ message: 'Message content is required' });
    }

    const user = await User.findOne({ profileSlug });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const message = await Message.create({
      content,
      recipient: user._id,
    });

    res.status(201).json({ message: 'Message sent', data: message });
  } catch (error) {
    console.error('Send message error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Private: get messages for logged-in user
router.get('/my', protect, async (req, res) => {
  try {
    const messages = await Message.find({ recipient: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.json({ messages });
  } catch (error) {
    console.error('Get messages error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

