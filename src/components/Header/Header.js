import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Top Tech Youtubers Conference 2022</h1>
      <h3>
        Your favorite tech tubers will be present at Central Park on January
        31,2022. Join us for an incredible event!
      </h3>
      <h2>
        Estimated Budget For The Event is <span>$20M</span>
      </h2>
    </div>
  );
};

export default Header;
