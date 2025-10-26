# Gym Management System - React Version

A complete gym management system converted from PHP to React with Node.js backend.

## Project Structure

This project consists of two main parts:

1. **gym-management-backend** - Node.js/Express REST API with MySQL database
2. **gym-management-frontend** - React-based user interface

## Features

### User Features
- User registration and authentication
- Browse available gym packages
- Book gym packages
- View booking history
- Update profile

### Admin Features
- Admin authentication
- Manage packages (CRUD operations)
- Manage categories
- View all bookings
- Manage booking statuses

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd gym-management-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your database credentials:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=gymdb
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

5. Create and setup database:
```bash
mysql -u root -p < database.sql
```

6. Start the server:
```bash
npm start
```

The API will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd gym-management-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with backend API URL:
```
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Default Credentials

### Admin Account
- Email: admin@gym.com
- Password: admin123

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin/login` - Admin login
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/change-password` - Change password

### Packages
- `GET /api/packages` - Get all packages
- `GET /api/packages/:id` - Get package by ID
- `POST /api/packages` - Create package (admin)
- `PUT /api/packages/:id` - Update package (admin)
- `DELETE /api/packages/:id` - Delete package (admin)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/my-bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `GET /api/bookings` - Get all bookings (admin)
- `PUT /api/bookings/:id` - Update booking status (admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/:id` - Update category (admin)
- `DELETE /api/categories/:id` - Delete category (admin)

## Technologies Used

### Backend
- Node.js
- Express.js
- MySQL2
- JWT for authentication
- Bcrypt for password hashing
- CORS
- dotenv

### Frontend
- React 18
- React Router v6
- Axios
- Context API
- CSS3

## Conversion from PHP

This project is a complete rewrite of the original PHP-based gym management system:

**Original (PHP):**
- PHP with MySQLi/PDO
- Server-side rendering
- Session-based authentication
- jQuery for frontend interactions

**New (React):**
- RESTful API architecture
- React for UI
- JWT-based authentication
- Modern component-based structure
- Improved security and scalability

## License

ISC

## Support

For issues or questions, please create an issue in the repository.
