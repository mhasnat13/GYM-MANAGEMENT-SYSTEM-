-- Gym Management System Database Schema

CREATE DATABASE IF NOT EXISTS gymdb;
USE gymdb;

-- Users table
CREATE TABLE IF NOT EXISTS tbluser (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(100) NOT NULL,
  lname VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  mobile VARCHAR(15) NOT NULL UNIQUE,
  state VARCHAR(100),
  city VARCHAR(100),
  password VARCHAR(255) NOT NULL,
  address TEXT,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin users table
CREATE TABLE IF NOT EXISTS tbladmin (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Category table
CREATE TABLE IF NOT EXISTS tblcategory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(150) NOT NULL,
  description TEXT,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Package table
CREATE TABLE IF NOT EXISTS tbladdpackage (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category INT NOT NULL,
  titlename VARCHAR(200) NOT NULL,
  PackageType VARCHAR(100),
  PackageDuration VARCHAR(100),
  Price DECIMAL(10,2) NOT NULL,
  uploadphoto VARCHAR(255),
  Description TEXT,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category) REFERENCES tblcategory(id) ON DELETE CASCADE
);

-- Booking table
CREATE TABLE IF NOT EXISTS tblbooking (
  id INT PRIMARY KEY AUTO_INCREMENT,
  package_id INT NOT NULL,
  userid INT NOT NULL,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  payment_status VARCHAR(50) DEFAULT 'pending',
  payment_amount DECIMAL(10,2),
  payment_date TIMESTAMP NULL,
  status VARCHAR(50) DEFAULT 'active',
  FOREIGN KEY (package_id) REFERENCES tbladdpackage(id) ON DELETE CASCADE,
  FOREIGN KEY (userid) REFERENCES tbluser(id) ON DELETE CASCADE
);

-- Posts/Blog table
CREATE TABLE IF NOT EXISTS tblpost (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  author_id INT,
  category_id INT,
  image VARCHAR(255),
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES tblcategory(id) ON DELETE SET NULL
);

-- Insert default admin user (password: admin123)
INSERT INTO tbladmin (username, email, password) VALUES 
('admin', 'admin@gym.com', '$2a$10$8K1p/a0dL3LcrmtlcU6F6OuAx1LYxq7sGQgk7ShVbHxCfxONVCGKm');
