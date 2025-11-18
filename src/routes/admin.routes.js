const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get('/dashboard', authMiddleware, isAdmin, adminController.getDashboardStats);
router.get('/users', authMiddleware, isAdmin, adminController.listUsers);
router.put('/users/:id/role', authMiddleware, isAdmin, adminController.updateUserRole);
router.put('/users/:id/ban', authMiddleware, isAdmin, adminController.toggleUserBan);
router.get('/movies', authMiddleware, isAdmin, adminController.listMoviesAdmin);

module.exports = router;
