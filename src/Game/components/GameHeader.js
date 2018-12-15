import React from "react";
import { calculateGameStatus } from "../../services/calculateGameStatus";

const GameHeader = ({ basicGameData, teams }) => {
  const renderHeader = (teamData, isAway) => {
    return (
      <div
        className="game-header-content col-sm-6"
        style={{ flexDirection: isAway ? "row-reverse" : "row" }}
      >
        <div className="game-team-name">
          <div className="overlay-text">
            {teams.find(team => team.teamId === teamData.teamId).urlName}
          </div>
          <p className="game-team-tri">{teamData.triCode}</p>
        </div>
        <p className="game-team-score">{teamData.score || 0}</p>
      </div>
    );
  };

  return (
    <div className="game-header-wrapper col-sm-12">
      {renderHeader(basicGameData.hTeam)}
      <div className="game-header-status">
        {calculateGameStatus(basicGameData)}
      </div>
      {renderHeader(basicGameData.vTeam, true)}
    </div>
  );
};

export default GameHeader;
