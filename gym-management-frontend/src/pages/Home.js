import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { packageService, bookingService } from '../services';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    try {
      const data = await packageService.getAllPackages();
      setPackages(data.packages || []);
    } catch (error) {
      console.error('Error loading packages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async (packageId) => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    if (window.confirm('Do you want to book this package?')) {
      try {
        await bookingService.createBooking({ package_id: packageId });
        alert('Package booked successfully!');
        window.location.href = '/bookings';
      } catch (error) {
        alert(error.response?.data?.message || 'Failed to book package');
      }
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Gym Management System</h1>
          <p>Physical Activity Can Improve Your Health</p>
        </div>
      </section>

      <section className="packages-section">
        <div className="container">
          <div className="section-title">
            <h2>Pricing Plans</h2>
            <p>Practice to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
          </div>

          {loading ? (
            <div className="loading">Loading packages...</div>
          ) : packages.length === 0 ? (
            <div className="no-packages">No packages available at the moment</div>
          ) : (
            <div className="packages-grid">
              {packages.map((pkg) => (
                <div key={pkg.id} className="package-card">
                  <div className="package-header">
                    <h3>{pkg.titlename}</h3>
                    {pkg.category_name && (
                      <span className="category-badge">{pkg.category_name}</span>
                    )}
                  </div>
                  <div className="package-price">
                    <h2>${pkg.Price}</h2>
                    <p>{pkg.PackageDuration}</p>
                  </div>
                  <div 
                    className="package-description" 
                    dangerouslySetInnerHTML={{ __html: pkg.Description }}
                  />
                  <button 
                    className="btn-book" 
                    onClick={() => handleBooking(pkg.id)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
