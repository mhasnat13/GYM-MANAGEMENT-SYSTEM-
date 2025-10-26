# Gym Management System - Complete Setup Guide

## Overview

This project is a complete conversion of a PHP-based Gym Management System to a modern React application with a Node.js/Express backend and MySQL database.

## Architecture

```
┌─────────────────────────┐
│   React Frontend        │
│   (Port 3000)           │
└───────────┬─────────────┘
            │ HTTP/REST API
            ↓
┌─────────────────────────┐
│   Node.js Backend       │
│   (Port 5000)           │
└───────────┬─────────────┘
            │ MySQL
            ↓
┌─────────────────────────┐
│   MySQL Database        │
│   (gymdb)               │
└─────────────────────────┘
```

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MySQL** (v5.7 or higher)

## Installation Steps

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd GYM-MANAGEMENT-SYSTEM-
```

### Step 2: Setup MySQL Database

1. Login to MySQL:
```bash
mysql -u root -p
```

2. Create the database and import schema:
```bash
mysql -u root -p < gym-management-backend/database.sql
```

Or manually:
```sql
CREATE DATABASE gymdb;
```

3. The database.sql file will:
   - Create all necessary tables
   - Set up foreign key relationships
   - Create a default admin user

### Step 3: Setup Backend

1. Navigate to backend directory:
```bash
cd gym-management-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Edit `.env` with your configuration:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=gymdb
JWT_SECRET=your_random_secret_key_here
JWT_EXPIRE=7d
```

5. Start the backend server:
```bash
npm start
```

The API will be available at `http://localhost:5000`

### Step 4: Setup Frontend

1. Open a new terminal and navigate to frontend directory:
```bash
cd gym-management-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. The `.env` should contain:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

## Default Login Credentials

### Admin Account
- **Email:** admin@gym.com
- **Password:** admin123

### Test User
You'll need to register a new user through the registration page.

## Project Structure

```
GYM-MANAGEMENT-SYSTEM-/
├── gym-management-backend/
│   ├── config/
│   │   └── db.js                    # Database configuration
│   ├── controllers/
│   │   ├── authController.js        # Authentication logic
│   │   ├── bookingController.js     # Booking operations
│   │   ├── categoryController.js    # Category management
│   │   └── packageController.js     # Package management
│   ├── middleware/
│   │   └── auth.js                  # JWT authentication middleware
│   ├── routes/
│   │   ├── authRoutes.js           # Auth endpoints
│   │   ├── bookingRoutes.js        # Booking endpoints
│   │   ├── categoryRoutes.js       # Category endpoints
│   │   └── packageRoutes.js        # Package endpoints
│   ├── .env.example
│   ├── database.sql                 # Database schema
│   ├── package.json
│   ├── README.md
│   └── server.js                    # Entry point
│
├── gym-management-frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js           # Navigation header
│   │   │   └── Footer.js           # Footer component
│   │   ├── context/
│   │   │   └── AuthContext.js      # Authentication context
│   │   ├── pages/
│   │   │   ├── Home.js             # Homepage with packages
│   │   │   ├── Login.js            # User login
│   │   │   ├── Register.js         # User registration
│   │   │   ├── About.js            # About page
│   │   │   ├── Contact.js          # Contact page
│   │   │   ├── Bookings.js         # User bookings
│   │   │   ├── AdminLogin.js       # Admin login
│   │   │   └── AdminDashboard.js   # Admin dashboard
│   │   ├── services/
│   │   │   ├── api.js              # Axios configuration
│   │   │   └── index.js            # API service functions
│   │   ├── App.js                  # Main component
│   │   └── index.js                # Entry point
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README_REACT.md                  # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin/login` - Admin login
- `GET /api/auth/profile` - Get user profile (protected)
- `POST /api/auth/change-password` - Change password (protected)

### Packages
- `GET /api/packages` - Get all packages (public)
- `GET /api/packages/:id` - Get package by ID (public)
- `POST /api/packages` - Create package (admin only)
- `PUT /api/packages/:id` - Update package (admin only)
- `DELETE /api/packages/:id` - Delete package (admin only)

### Bookings
- `POST /api/bookings` - Create booking (user)
- `GET /api/bookings/my-bookings` - Get user bookings (user)
- `GET /api/bookings/:id` - Get booking details (user/admin)
- `GET /api/bookings` - Get all bookings (admin only)
- `PUT /api/bookings/:id` - Update booking status (admin only)

### Categories
- `GET /api/categories` - Get all categories (public)
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

## Features

### User Features
✅ User registration with validation
✅ Secure login with JWT tokens
✅ Browse available gym packages
✅ Book gym packages
✅ View booking history with details
✅ Responsive design for all devices

### Admin Features
✅ Admin authentication
✅ Dashboard overview
✅ Manage packages (Create, Read, Update, Delete)
✅ View all bookings
✅ Update booking statuses
✅ Manage categories

## Security Features

- **Password Hashing:** Using bcrypt for secure password storage
- **JWT Authentication:** Token-based authentication for API requests
- **Protected Routes:** Client and server-side route protection
- **SQL Injection Prevention:** Using parameterized queries
- **CORS Configuration:** Proper CORS setup for API security
- **Input Validation:** Server-side validation for all inputs

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL2** - Database driver
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS3** - Styling

## Production Deployment

### Backend Deployment

1. Build and prepare:
```bash
cd gym-management-backend
npm install --production
```

2. Set production environment variables
3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start server.js --name gym-backend
```

### Frontend Deployment

1. Build the production bundle:
```bash
cd gym-management-frontend
npm run build
```

2. Deploy the `build` folder to any static hosting service:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - GitHub Pages

3. Update the `.env` with production API URL before building.

## Troubleshooting

### Backend Issues

**Database Connection Error:**
- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database `gymdb` exists

**Port Already in Use:**
- Change PORT in `.env` to a different number
- Kill the process using the port: `lsof -ti:5000 | xargs kill`

### Frontend Issues

**API Connection Error:**
- Ensure backend is running on port 5000
- Check REACT_APP_API_URL in `.env`
- Verify CORS is enabled in backend

**Build Fails:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

## Development Tips

### Running Both Servers Concurrently

You can use two terminal windows:

Terminal 1 (Backend):
```bash
cd gym-management-backend
npm start
```

Terminal 2 (Frontend):
```bash
cd gym-management-frontend
npm start
```

### Hot Reload
Both servers support hot reload. Changes will be reflected automatically.

### Testing API Endpoints
Use tools like Postman or curl to test API endpoints directly.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC

## Support

For issues, questions, or contributions, please open an issue in the repository.

---

**Note:** This is a complete rewrite of the original PHP-based system. The original PHP code is preserved in the zip file for reference.
