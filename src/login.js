import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for SPA navigation
import Navbar from '../components/Navbar';
import './AuthForm.css'; // Import our new custom styles
//bhosdo bhaNG
export default function Login() {
  // Switched from useRef to useState for controlled form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseText, setResponseText] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://127.0.0.1:8000/tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Use state variables directly instead of refs
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setResponseText(data.error || "Login failed. Please try again.");
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
          <h1 className="auth-title">Login</h1>
          {/* Use a form element with onSubmit for better accessibility */}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                className="auth-input" // Use custom class
                placeholder="Email Address"
                value={email} // Controlled input value
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="auth-input" // Use custom class
                placeholder="Password"
                value={password} // Controlled input value
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
            </div>
            <button type="submit" className="auth-button"> {/* Use custom class */}
              Log In
            </button>
          </form>
          <p className="auth-switch-text"> {/* Use custom class */}
            Don't have an account?{" "}
            {/* Use <Link> instead of <a> for client-side routing */}
            <Link to="/signup">Sign Up</Link>
          </p>
          {responseText && (
            <p className="text-center text-danger mt-2">{responseText}</p>
          )}
        </div>
      </div>
    </>
  );
}