const db = require('../config/db');

// Get all packages
exports.getAllPackages = async (req, res) => {
  try {
    const [packages] = await db.query(`
      SELECT p.*, c.category_name 
      FROM tbladdpackage p
      LEFT JOIN tblcategory c ON p.category = c.id
      ORDER BY p.create_date DESC
    `);

    res.json({
      success: true,
      packages
    });
  } catch (error) {
    console.error('Get packages error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Get package by ID
exports.getPackageById = async (req, res) => {
  try {
    const [packages] = await db.query(`
      SELECT p.*, c.category_name 
      FROM tbladdpackage p
      LEFT JOIN tblcategory c ON p.category = c.id
      WHERE p.id = ?
    `, [req.params.id]);

    if (packages.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Package not found' 
      });
    }

    res.json({
      success: true,
      package: packages[0]
    });
  } catch (error) {
    console.error('Get package error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Create package (Admin only)
exports.createPackage = async (req, res) => {
  try {
    const { category, titlename, PackageType, PackageDuration, Price, Description } = req.body;

    if (!titlename || !Price) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title and Price are required' 
      });
    }

    const [result] = await db.query(
      'INSERT INTO tbladdpackage (category, titlename, PackageType, PackageDuration, Price, Description) VALUES (?, ?, ?, ?, ?, ?)',
      [category, titlename, PackageType, PackageDuration, Price, Description]
    );

    res.status(201).json({
      success: true,
      message: 'Package created successfully',
      packageId: result.insertId
    });
  } catch (error) {
    console.error('Create package error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Update package (Admin only)
exports.updatePackage = async (req, res) => {
  try {
    const { category, titlename, PackageType, PackageDuration, Price, Description } = req.body;

    await db.query(
      'UPDATE tbladdpackage SET category = ?, titlename = ?, PackageType = ?, PackageDuration = ?, Price = ?, Description = ? WHERE id = ?',
      [category, titlename, PackageType, PackageDuration, Price, Description, req.params.id]
    );

    res.json({
      success: true,
      message: 'Package updated successfully'
    });
  } catch (error) {
    console.error('Update package error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Delete package (Admin only)
exports.deletePackage = async (req, res) => {
  try {
    await db.query('DELETE FROM tbladdpackage WHERE id = ?', [req.params.id]);

    res.json({
      success: true,
      message: 'Package deleted successfully'
    });
  } catch (error) {
    console.error('Delete package error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};
