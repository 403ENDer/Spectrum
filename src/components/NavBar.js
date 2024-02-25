import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          Spectrum
        </Link>
        <div className="nav-links">
          <Link to="/search">Search</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="settings">
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
      {/* Rest of your Home page content goes here */}
    </div>
  );
}

export default Home;
