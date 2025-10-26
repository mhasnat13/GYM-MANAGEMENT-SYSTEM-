import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage your gym system</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">📦</div>
            <h3>Packages</h3>
            <p>Manage gym packages</p>
            <a href="/admin/packages" className="card-link">View Packages →</a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📋</div>
            <h3>Bookings</h3>
            <p>View all bookings</p>
            <a href="/admin/bookings" className="card-link">View Bookings →</a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📂</div>
            <h3>Categories</h3>
            <p>Manage categories</p>
            <a href="/admin/categories" className="card-link">View Categories →</a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">👥</div>
            <h3>Users</h3>
            <p>Manage users</p>
            <a href="/admin/users" className="card-link">View Users →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
