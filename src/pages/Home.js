import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add ../ since CSS is in parent directory

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Bootstrap grid system */}
      <div className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-title display-4 fw-bold mb-4">
                Universal Bookmark
                <span className="gradient-text"> Manager</span>
              </h1>
              <p className="hero-subtitle lead mb-4">
                Access your bookmarks anywhere, anytime. Sync across all your devices seamlessly.
              </p>
              <div className="hero-buttons d-flex gap-3">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Get Started Free
                </Link>
                <Link to="/login" className="btn btn-outline-primary btn-lg">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="floating-card card shadow-lg p-4">
                <div className="bookmark-icon display-1 mb-3">🔖</div>
                <h3>Smart Bookmarks</h3>
                <p className="text-muted">Organize with tags and categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why Choose BookmarkHub?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 border-0 shadow-sm p-4 text-center">
                <div className="feature-icon display-4 mb-3">📱</div>
                <h3>Mobile First</h3>
                <p className="text-muted">Optimized for mobile devices with responsive design</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 border-0 shadow-sm p-4 text-center">
                <div className="feature-icon display-4 mb-3">⚡</div>
                <h3>Lightning Fast</h3>
                <p className="text-muted">Quick access to your bookmarks with instant search</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card card h-100 border-0 shadow-sm p-4 text-center">
                <div className="feature-icon display-4 mb-3">🔒</div>
                <h3>Secure</h3>
                <p className="text-muted">Your data is encrypted and secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;