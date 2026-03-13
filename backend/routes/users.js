import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Public: get basic profile info by slug (for public message page)
router.get('/profile/:profileSlug', async (req, res) => {
  try {
    const { profileSlug } = req.params;
    const user = await User.findOne({ profileSlug }).select(
      'username profileSlug'
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Get profile error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

