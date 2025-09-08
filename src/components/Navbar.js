import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Hamburger Menu */}
      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Vertical Navbar */}
      <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
        <div className="navbar-header">
          <h2 className="navbar-logo">BookmarkHub</h2>
        </div>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={activeTab === "home" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={
                activeTab === "dashboard" ? "nav-link active" : "nav-link"
              }
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={activeTab === "about" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveTab("about")}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={activeTab === "login" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveTab("login")}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                activeTab === "signup" ? "nav-link active" : "nav-link"
              }
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay when navbar is open on mobile */}
      {isOpen && (
        <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
