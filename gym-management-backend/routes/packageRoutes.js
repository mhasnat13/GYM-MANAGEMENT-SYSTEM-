const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { apiLimiter, createLimiter } = require('../middleware/rateLimiter');

// Public routes with rate limiting
router.get('/', apiLimiter, packageController.getAllPackages);
router.get('/:id', apiLimiter, packageController.getPackageById);

// Admin routes with rate limiting
router.post('/', createLimiter, authMiddleware, adminMiddleware, packageController.createPackage);
router.put('/:id', apiLimiter, authMiddleware, adminMiddleware, packageController.updatePackage);
router.delete('/:id', apiLimiter, authMiddleware, adminMiddleware, packageController.deletePackage);

module.exports = router;
