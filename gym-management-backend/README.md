# Gym Management System - Backend API

RESTful API for the Gym Management System built with Node.js, Express, and MySQL.

## Features

- User authentication and registration
- Admin authentication
- Package management (CRUD operations)
- Booking management
- Category management
- JWT-based authentication

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update the `.env` file with your database credentials:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=gymdb
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
```

4. Create the database:
```bash
mysql -u root -p < database.sql
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- POST `/api/auth/admin/login` - Admin login
- GET `/api/auth/profile` - Get user profile (protected)
- POST `/api/auth/change-password` - Change password (protected)

### Packages
- GET `/api/packages` - Get all packages
- GET `/api/packages/:id` - Get package by ID
- POST `/api/packages` - Create package (admin only)
- PUT `/api/packages/:id` - Update package (admin only)
- DELETE `/api/packages/:id` - Delete package (admin only)

### Bookings
- POST `/api/bookings` - Create booking (protected)
- GET `/api/bookings/my-bookings` - Get user bookings (protected)
- GET `/api/bookings/:id` - Get booking details (protected)
- GET `/api/bookings` - Get all bookings (admin only)
- PUT `/api/bookings/:id` - Update booking status (admin only)

### Categories
- GET `/api/categories` - Get all categories
- POST `/api/categories` - Create category (admin only)
- PUT `/api/categories/:id` - Update category (admin only)
- DELETE `/api/categories/:id` - Delete category (admin only)

## Default Admin Credentials

- Email: admin@gym.com
- Password: admin123

## License

ISC
