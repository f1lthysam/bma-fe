import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import Navbar from '../components/Navbar';
import './AuthForm.css'; // Import our new custom styles

export default function Signup() {
  // Switched to useState for a controlled form
  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [responseText, setResponseText] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://127.0.0.1:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Use state variables directly
        body: JSON.stringify({ name, email, password, phone }),
      });

      const data = await response.json();
      
      // Check for 201 Created status, which is more conventional for successful POSTs
      if (response.status === 201) {
        setResponseText("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500); // Give user time to read message
      } else {
        setResponseText(data.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      setResponseText("Network error: " + error.message);
    }
  };

  return (
    <>
      <Navbar brandName="IPL MANAGEMENT" />
      {/* Use the new CSS classes for the container and card */}
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Create Account</h1>
          {/* Use a form element with onSubmit */}
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                className="auth-input" // Use custom class
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="auth-input" // Use custom class
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel" // Use 'tel' for better mobile support
                className="auth-input" // Use custom class
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="auth-input" // Use custom class
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-button"> {/* Use custom class */}
              Sign Up
            </button>
          </form>
          <p className="auth-switch-text"> {/* Use custom class */}
            Already have an account? <Link to="/login">Log In</Link>
          </p>
          {responseText && (
            <p className="text-center text-danger mt-2">{responseText}</p>
          )}
        </div>
      </div>
    </>
  );
}