import React from "react";

const DynamicGameStats = ({
  basicGameData,
  teams,
  statView,
  changeStatView
}) => {
  console.log(statView, "stat view");
  return (
    <div className="dynamic-game-stats-wrapper">
      <div className="stat-options">
        <p className={statView === "matchUp" ? "selected" : ""}>Match Up</p>
        <p className={statView === "boxScore" ? "selected" : ""}>Box Score</p>
      </div>
    </div>
  );
};

export default DynamicGameStats;
