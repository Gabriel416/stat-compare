import React from "react";
import nbaLogo from "../../images/nba-logo.png";
import "./loading.css";

const Loading = () => (
  <div className="loading-wrapper">
    <img src={nbaLogo} alt="Loading logo" className="loading-logo" />
  </div>
);

export default Loading;
