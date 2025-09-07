import React from 'react';
import { Link } from 'react-router-dom';

// We now accept a 'brandName' prop, with "IMS" as the default value.
const Navbar = ({ title, brandName = "IMS" }) => {
  // Dynamically adjust font size based on the length of the brand name.
  const brandFontSize = brandName.length > 5 ? '1.25rem' : '1.5rem';

  return (
    <>
      <style>{`
        .custom-navbar {
          background: linear-gradient(90deg, #0d47a1, #1976d2); /* Deep Blue to Light Blue */
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .navbar-brand-custom {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
        }
        .navbar-brand-custom img {
          width: 35px;
          height: 35px;
          margin-right: 12px;
        }
        .navbar-brand-custom span {
          font-family: 'Optima Extra Black', sans-serif;
          font-size: ${brandFontSize}; /* We now use the dynamic font size */
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        }
        .navbar-title-custom {
          font-family: 'Optima Extra Black', sans-serif;
          font-size: 1.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
      
      <nav className="custom-navbar">
        {/* Left Side: Brand and Logo */}
        <Link to="/dashboard" className="navbar-brand-custom">
          <img src="/favicon.ico" alt="Logo" />
          {/* We now render the brandName prop */}
          <span>{brandName}</span> 
        </Link>
        
        {/* Center: Dynamic Page Title (will be empty if no title is passed) */}
        <div className="navbar-title-custom">
          {title}
        </div>
        
        {/* Right Side: Intentionally empty for centering */}
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;