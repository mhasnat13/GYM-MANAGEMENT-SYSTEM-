const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// User routes
router.post('/', authMiddleware, bookingController.createBooking);
router.get('/my-bookings', authMiddleware, bookingController.getUserBookings);
router.get('/:id', authMiddleware, bookingController.getBookingById);

// Admin routes
router.get('/', authMiddleware, adminMiddleware, bookingController.getAllBookings);
router.put('/:id', authMiddleware, adminMiddleware, bookingController.updateBookingStatus);

module.exports = router;
