const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Public routes
router.get('/', packageController.getAllPackages);
router.get('/:id', packageController.getPackageById);

// Admin routes
router.post('/', authMiddleware, adminMiddleware, packageController.createPackage);
router.put('/:id', authMiddleware, adminMiddleware, packageController.updatePackage);
router.delete('/:id', authMiddleware, adminMiddleware, packageController.deletePackage);

module.exports = router;
