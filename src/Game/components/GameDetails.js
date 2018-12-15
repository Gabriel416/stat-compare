import React from "react";
import { teamStyles } from "../../config";

const GameDetails = ({ basicGameData, teams }) => {
  const renderTeamLogo = teamData => {
    const team = teams.find(team => team.teamId === teamData.teamId);
    return (
      <div className="game-details-content col-sm-6">
        <img src={teamStyles[team.urlName].logo} alt="team logo" />
      </div>
    );
  };

  const renderScoreOverview = () => {
    return <p>hello</p>;
  };

  return (
    <div className="game-details-wrapper col-sm-12">
      {renderTeamLogo(basicGameData.hTeam)}
      {renderScoreOverview()}
      {renderTeamLogo(basicGameData.vTeam)}
    </div>
  );
};

export default GameDetails;
