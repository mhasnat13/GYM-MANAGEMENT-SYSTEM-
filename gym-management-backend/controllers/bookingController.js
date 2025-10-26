const db = require('../config/db');

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const { package_id } = req.body;
    const userid = req.user.id;

    if (!package_id) {
      return res.status(400).json({ 
        success: false, 
        message: 'Package ID is required' 
      });
    }

    // Get package details
    const [packages] = await db.query(
      'SELECT Price FROM tbladdpackage WHERE id = ?',
      [package_id]
    );

    if (packages.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Package not found' 
      });
    }

    const [result] = await db.query(
      'INSERT INTO tblbooking (package_id, userid, payment_amount) VALUES (?, ?, ?)',
      [package_id, userid, packages[0].Price]
    );

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      bookingId: result.insertId
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Get user bookings
exports.getUserBookings = async (req, res) => {
  try {
    const [bookings] = await db.query(`
      SELECT b.*, p.titlename, p.Price, p.PackageDuratiobn, p.PackageType
      FROM tblbooking b
      JOIN tbladdpackage p ON b.package_id = p.id
      WHERE b.userid = ?
      ORDER BY b.booking_date DESC
    `, [req.user.id]);

    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Get all bookings (Admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const [bookings] = await db.query(`
      SELECT b.*, p.titlename, p.Price, p.PackageDuratiobn,
             u.fname, u.lname, u.email, u.mobile
      FROM tblbooking b
      JOIN tbladdpackage p ON b.package_id = p.id
      JOIN tbluser u ON b.userid = u.id
      ORDER BY b.booking_date DESC
    `);

    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    console.error('Get all bookings error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const [bookings] = await db.query(`
      SELECT b.*, p.titlename, p.Price, p.PackageDuratiobn, p.PackageType, p.Description,
             u.fname, u.lname, u.email, u.mobile, u.state, u.city
      FROM tblbooking b
      JOIN tbladdpackage p ON b.package_id = p.id
      JOIN tbluser u ON b.userid = u.id
      WHERE b.id = ?
    `, [req.params.id]);

    if (bookings.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Booking not found' 
      });
    }

    res.json({
      success: true,
      booking: bookings[0]
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Update booking status (Admin only)
exports.updateBookingStatus = async (req, res) => {
  try {
    const { payment_status, status } = req.body;

    await db.query(
      'UPDATE tblbooking SET payment_status = ?, status = ? WHERE id = ?',
      [payment_status, status, req.params.id]
    );

    res.json({
      success: true,
      message: 'Booking updated successfully'
    });
  } catch (error) {
    console.error('Update booking error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};
