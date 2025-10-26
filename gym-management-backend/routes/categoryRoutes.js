const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { apiLimiter, createLimiter } = require('../middleware/rateLimiter');

// Public routes with rate limiting
router.get('/', apiLimiter, categoryController.getAllCategories);

// Admin routes with rate limiting
router.post('/', createLimiter, authMiddleware, adminMiddleware, categoryController.createCategory);
router.put('/:id', apiLimiter, authMiddleware, adminMiddleware, categoryController.updateCategory);
router.delete('/:id', apiLimiter, authMiddleware, adminMiddleware, categoryController.deleteCategory);

module.exports = router;
