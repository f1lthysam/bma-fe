import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [rolesLoaded, setRolesLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Using state instead of ref is generally safer in React

  useEffect(() => {
    async function getRoles() {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await fetch("http://127.0.0.1:8000/users/roles", {
          headers: {
            "Content-Type": "application/json",
            "token": token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setIsAdmin(data.isAdmin);
          setIsOwner(data.teamOwner);
        } else {
          setErrorMessage(data.error || "Failed to fetch user roles.");
          if (response.status === 401 || response.status === 403) {
            navigate('/login');
          }
        }
      } catch (error) {
        setErrorMessage("Network Error: " + error.message);
      } finally {
        setRolesLoaded(true);
      }
    }
    getRoles();
  }, [navigate]);

  const handlePlayerClick = () => {
    navigate(isAdmin ? "/players?admin=true" : "/players");
  };

  const handleTeamClick = () => {
    navigate(isAdmin ? "/teams?admin=true" : "/teams");
  };

  if (!rolesLoaded) {
    // Optional: A loading spinner that fits the theme
    return (
        <>
            <Navbar title="LOADING..." />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5'}}>
                {/* You can use a spinner here */}
            </div>
        </>
    );
  }

  return (
    <>
      <Navbar title="DASHBOARD" />
      
      {/* Self-contained CSS for the dashboard. Sharp, modern, and professional. */}
      <style>{`
        .dashboard-page {
          background-color: #f0f2f5; /* A light, neutral background */
          min-height: calc(100vh - 65px);
          padding: 4rem 1rem;
        }
        .dashboard-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
          gap: 2.5rem;
        }
        .dashboard-card {
          position: relative; /* Crucial for the overlay */
          width: 340px;
          height: 450px;
          border-radius: 0; /* Sharp corners */
          overflow: hidden; /* Keeps the overlay and image contained */
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Pushes text to the bottom */
          padding: 2rem;
          color: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .dashboard-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        /* The gradient overlay */
        .dashboard-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(13, 71, 161, 0.95) 10%, rgba(25, 118, 210, 0.3) 100%);
          z-index: 1; /* Sits above the image but below the text */
          transition: background 0.3s ease;
        }
        .card-content {
          position: relative;
          z-index: 2; /* Ensures text is on top of the overlay */
        }
        .card-title {
          font-family: 'Oswald', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 0.5rem 0;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
        }
        .card-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
        }
        
        /* Special styles for the Owner Card */
        .owner-card {
            border: 2px solid #FFC107; /* A sharp yellow border */
        }
        .owner-card::before {
          /* Override with the yellow gradient */
          background: linear-gradient(to top, rgba(255, 143, 0, 0.95) 10%, rgba(255, 193, 7, 0.4) 100%);
        }
      `}</style>

      <div className="dashboard-page">
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        
        <div className="dashboard-container">
          
          {/* Players Card */}
          <div
            className="dashboard-card"
            style={{ backgroundImage: 'url(/players.png)' }}
            onClick={handlePlayerClick}
          >
            <div className="card-content">
              <h2 className="card-title">Players</h2>
              <p className="card-description">
                Browse, search, and view statistics for all registered league players.
              </p>
            </div>
          </div>

          {/* Teams Card */}
          <div
            className="dashboard-card"
            style={{ backgroundImage: 'url(/teams.png)' }}
            onClick={handleTeamClick}
          >
            <div className="card-content">
              <h2 className="card-title">League Teams</h2>
              <p className="card-description">
                Explore team profiles, view current standings, and analyze team performance.
              </p>
            </div>
          </div>
          
          {/* Conditionally Rendered Owner Card */}
          {isOwner && (
            <div
              className="dashboard-card owner-card" // The special class applies the yellow gradient
              style={{ backgroundImage: 'url(/teams.png)' }}
              onClick={() => navigate("/editteam")}
            >
              <div className="card-content">
                <h2 className="card-title">Team Management</h2>
                <p className="card-description">
                  Update your team's identity, logo, and manage your official details.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}