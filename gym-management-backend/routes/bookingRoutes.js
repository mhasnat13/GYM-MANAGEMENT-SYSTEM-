const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { apiLimiter, createLimiter } = require('../middleware/rateLimiter');

// User routes with rate limiting
router.post('/', createLimiter, authMiddleware, bookingController.createBooking);
router.get('/my-bookings', apiLimiter, authMiddleware, bookingController.getUserBookings);
router.get('/:id', apiLimiter, authMiddleware, bookingController.getBookingById);

// Admin routes with rate limiting
router.get('/', apiLimiter, authMiddleware, adminMiddleware, bookingController.getAllBookings);
router.put('/:id', apiLimiter, authMiddleware, adminMiddleware, bookingController.updateBookingStatus);

module.exports = router;
