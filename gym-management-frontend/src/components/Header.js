import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h1>Gym Management</h1>
          </Link>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
            {isAuthenticated ? (
              <>
                {isAdmin ? (
                  <>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/packages">Packages</Link></li>
                    <li><Link to="/admin/bookings">Bookings</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/bookings">My Bookings</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                  </>
                )}
                <li>
                  <button onClick={handleLogout} className="btn-logout">
                    Logout ({user?.fname || user?.username})
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register" className="btn-register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
