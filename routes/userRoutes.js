import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Example protected route - Get user profile
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'User profile data', user: req.user });
});

// Example Admin-only route
router.get('/admin', protect, admin, (req, res) => {
  res.json({ message: 'Admin access granted' });
});

export default router;
