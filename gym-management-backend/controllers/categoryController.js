const db = require('../config/db');

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const [categories] = await db.query(
      'SELECT * FROM tblcategory ORDER BY create_date DESC'
    );

    res.json({
      success: true,
      categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Create category (Admin only)
exports.createCategory = async (req, res) => {
  try {
    const { category_name, description } = req.body;

    if (!category_name) {
      return res.status(400).json({ 
        success: false, 
        message: 'Category name is required' 
      });
    }

    const [result] = await db.query(
      'INSERT INTO tblcategory (category_name, description) VALUES (?, ?)',
      [category_name, description]
    );

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      categoryId: result.insertId
    });
  } catch (error) {
    console.error('Create category error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Update category (Admin only)
exports.updateCategory = async (req, res) => {
  try {
    const { category_name, description } = req.body;

    await db.query(
      'UPDATE tblcategory SET category_name = ?, description = ? WHERE id = ?',
      [category_name, description, req.params.id]
    );

    res.json({
      success: true,
      message: 'Category updated successfully'
    });
  } catch (error) {
    console.error('Update category error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// Delete category (Admin only)
exports.deleteCategory = async (req, res) => {
  try {
    await db.query('DELETE FROM tblcategory WHERE id = ?', [req.params.id]);

    res.json({
      success: true,
      message: 'Category deleted successfully'
    });
  } catch (error) {
    console.error('Delete category error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};
