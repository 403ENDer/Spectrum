import React, { useState } from "react";
import "../../stylesheets/CommunityDetails.css";
import post from "../../images/post.jpg";

const conversations = [
  // Replace with actual conversation data fetched from backend
  {
    sender: "Rajesh",
    message: "Hey everyone, did you catch the cricket match yesterday?",
    timestamp: "2024-02-25 10:00:00",
  },
  {
    sender: "Priya",
    message: "Yes, it was an intense game! What did you think?",
    timestamp: "2024-02-25 10:05:00",
  },
  {
    sender: "Suresh",
    message: "I missed it! Who won?",
    timestamp: "2024-02-25 10:10:00",
  },
  {
    sender: "Rajesh",
    message: "It was a close match, but India emerged victorious in the end.",
    timestamp: "2024-02-25 10:15:00",
  },
  {
    sender: "Sanjay",
    message: "Hey Guys! Watch my new post about the GOAT",
    timestamp: "2024-02-25 10:15:00",
  },
];

function CommunityDetails({ community }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (event) => {
    event.preventDefault();
    // Implement logic to send the message to the backend
    setNewMessage("");
  };

  return (
    <div className="community-details">
      <h2>{community.name}</h2>
      <div className="conversations">
        {conversations.map((conversation) => (
          <div key={conversation.timestamp} className="conversation">
            <p>
              <b>{conversation.sender}</b>: {conversation.message}
            </p>
            <span className="timestamp">{conversation.timestamp}</span>
          </div>
        ))}
        <div className="coversation">
          <img src={post}></img>
        </div>
      </div>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default CommunityDetails;
