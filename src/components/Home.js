import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommunityList from "./components/CommunityList";
import CommunityDetails from "./components/CommunityDetails";
import UserProfile from "./components/UserProfile";
import PersonalConvo from "./components/PersonalConvo";
import Quote from "./components/Quote";
import ".././stylesheets/Home.css";

const communities = [
  // Replace with your actual communities fetched from backend
  {
    id: 1,
    name: "Cricket Makkals",
    description: "Discuss all things coding and programming.",
    members: [1, 2, 3],
  },
  {
    id: 2,
    name: "Bookworms",
    description: "Share your love of reading and discuss your favorite books.",
    members: [2, 4, 5],
  },
  {
    id: 3,
    name: "Art & Design",
    description: "Explore creativity and share your artistic endeavors.",
    members: [1, 3, 5],
  },
];

const user = [
  { id: 1, name: "Dinesh K K V" },
  { id: 2, name: "Dhanush S" },
  { id: 3, name: "Bilal" },
  { id: 4, name: "Mohan Raj" },
  { id: 5, name: "Harish" },
  { id: 6, name: "Guhanathan" },
];
function Home() {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="home-container">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          Spectrum
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-links">
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
      <div className="content-container">
        <div className="column full">
          <CommunityList
            communities={communities}
            onCommunitySelect={setSelectedCommunity}
            user={user} // Make sure you're passing the user prop here
            onUserSelect={setSelectedUser}
          />
        </div>
        <div className="column right">
          {!selectedCommunity && <Quote />}
          {selectedCommunity && (
            <CommunityDetails community={selectedCommunity} />
          )}
          {selectedUser && <PersonalConvo user={selectedUser} />}
        </div>
        <UserProfile />
      </div>
    </div>
  );
}

export default Home;
