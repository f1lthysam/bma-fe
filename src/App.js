// src/App.js
import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // This function will be passed to the Login component
  const handleLogin = (userData) => {
    setCurrentUser(userData);
    console.log("User logged in:", userData);
  };

  // This function will be used by a Logout button
  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="App">
      {/* --- DYNAMIC NAVIGATION BAR --- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span>🔖</span> BookmarkHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>

              {/* --- Conditional Links based on login state --- */}
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-link nav-link"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* --- PROTECTED ROUTES --- */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Pass the handleLogin function to the Login component */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protect the dashboard route */}
        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard user={currentUser} /> : <Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
