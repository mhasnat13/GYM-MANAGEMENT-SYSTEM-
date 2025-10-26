const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middleware/auth');
const { authLimiter, registerLimiter, apiLimiter } = require('../middleware/rateLimiter');

// Public routes with rate limiting
router.post('/register', registerLimiter, authController.register);
router.post('/login', authLimiter, authController.login);
router.post('/admin/login', authLimiter, authController.adminLogin);

// Protected routes with general API rate limiting
router.get('/profile', apiLimiter, authMiddleware, authController.getProfile);
router.post('/change-password', apiLimiter, authMiddleware, authController.changePassword);

module.exports = router;
