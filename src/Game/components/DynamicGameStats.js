import React from "react";
import MatchUp from "./MatchUp";
import BoxScore from "./BoxScore";

const DynamicGameStats = ({
  gameStats,
  basicGameData,
  teams,
  players,
  statView,
  changeStatView,
  previousMatchup,
  setSelectedSearchResult
}) => {
  const renderStatView = () => {
    switch (statView) {
      case "matchUp":
        return (
          <MatchUp
            gameStats={gameStats}
            basicGameData={basicGameData}
            previousMatchup={previousMatchup}
            setSelectedSearchResult={setSelectedSearchResult}
          />
        );
      case "boxScore":
        return (
          <BoxScore
            teams={teams}
            gameStats={gameStats}
            basicGameData={basicGameData}
            previousMatchup={previousMatchup}
            setSelectedSearchResult={setSelectedSearchResult}
          />
        );
      default:
        break;
    }
  };
  console.log(statView, "stat view");
  return (
    <div className="dynamic-game-stats-wrapper">
      <div className="stat-options">
        <p
          className={statView === "matchUp" ? "selected" : ""}
          onClick={() => changeStatView("matchUp")}
        >
          Match Up
        </p>
        <p
          className={statView === "boxScore" ? "selected" : ""}
          onClick={() => changeStatView("boxScore")}
        >
          Box Score
        </p>
      </div>
      {renderStatView()}
    </div>
  );
};

export default DynamicGameStats;
