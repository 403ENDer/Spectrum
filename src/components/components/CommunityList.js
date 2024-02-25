import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/Communitylist.css";

function CommunityList({ communities, onCommunitySelect, user, onUserSelect }) {
  return (
    <div className="community-list-container">
      <h4>Communities</h4>
      <ul className="community-list">
        {communities.map((community) => (
          <li key={community.id}>
            <Link to="#" onClick={() => onCommunitySelect(community)}>
              {community.name}
            </Link>
          </li>
        ))}
      </ul>
      <br></br>
      <h4>Personal Messages</h4>
      <ul className="community-list">
        {user.map((user_each) => (
          <li key={user_each.id}>
            <Link to="#" onClick={() => onUserSelect(user_each)}>
              {user_each.name}
            </Link>
          </li>
        ))}
      </ul>
      <br></br>
      <h4>Post to Globe</h4>
    </div>
  );
}

export default CommunityList;
