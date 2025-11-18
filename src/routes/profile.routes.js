const express = require('express');
const router = express.Router();
const { getProfileStats, updateProfile } = require('../controllers/profile.controller');
const authMiddleware = require('../middleware/authMiddleware');
const checkBanned = require('../middleware/checkBanned');

// GET /api/profile/stats (auth)
router.get('/stats', authMiddleware, checkBanned, getProfileStats);

// PUT /api/profile (auth)
router.put('/', authMiddleware, checkBanned, updateProfile);

module.exports = router;
