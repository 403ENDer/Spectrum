import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/profile.jpeg";
import "../../stylesheets/CommunityDetails.css";
function UserProfile() {
  return (
    <div>
      <div className="user-profile">
        <div className="profile-info">
          <h4>User Profile</h4>
          <img src={image} className="avatar" alt="" />
          <h5>Sagaptham</h5>
          <button>
            <Link to="/ViewProfile">View Profile</Link>
          </button>
        </div>
      </div>
      <div className="user-profile">
        <div className="profile-info">
          <h4> Suggestions</h4>
          <img src="assets/person/7.jpeg" className="avatar" alt="" />
          <h5>Mental Fundais</h5>
          <button>
            <a href="#">Add Friend</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
