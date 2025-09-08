import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Remove BrowserRouter import
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <div className="nav-logo">
            <span>🔖</span> BookmarkHub
          </div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={activeTab === 'home' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveTab('home')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className={activeTab === 'dashboard' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={activeTab === 'about' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveTab('about')}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={activeTab === 'login' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className={activeTab === 'signup' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveTab('signup')}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
