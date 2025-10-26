# Gym Management System - React Frontend

React-based frontend for the Gym Management System.

## Features

- User authentication (login/registration)
- Browse and book gym packages
- View booking history
- Admin dashboard
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
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

3. Update the `.env` file with your backend API URL:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

Development mode:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Header.js
│   └── Footer.js
├── pages/             # Page components
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── About.js
│   ├── Contact.js
│   ├── Bookings.js
│   ├── AdminLogin.js
│   └── AdminDashboard.js
├── services/          # API services
│   ├── api.js
│   └── index.js
├── context/           # React context
│   └── AuthContext.js
├── App.js            # Main app component
└── index.js          # Entry point
```

## Available Routes

### Public Routes
- `/` - Home page with packages
- `/login` - User login
- `/register` - User registration
- `/about` - About page
- `/contact` - Contact page
- `/admin/login` - Admin login

### Protected Routes
- `/bookings` - User bookings (requires authentication)
- `/admin/dashboard` - Admin dashboard (requires admin privileges)

## Technologies Used

- React 18
- React Router v6
- Axios for API calls
- CSS3 for styling
- Context API for state management

## License

ISC
