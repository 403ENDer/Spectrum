import React from "react";
// You can create this file for styling

import backgroundImage from "../images/settings.jpg"; // Import your image

function Settings() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={divStyle}>{/* Content goes here */}</div>;
}

export default Settings;
