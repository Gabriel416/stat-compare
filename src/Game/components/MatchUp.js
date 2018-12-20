import React from "react";
import findPlayer from "../../services/findPlayer";
import avatar from "../../images/avatar.png";

const MatchUp = ({ gameStats, basicGameData, previousMatchup }) => {
  const arrangeData = () => {
    if (
      basicGameData.hTeam.teamId !== previousMatchup.basicGameData.hTeam.teamId
    ) {
      // If the previous match had an opposite home team switch roles around
      let statsCopy = JSON.parse(JSON.stringify(previousMatchup.stats));
      statsCopy.hTeam = previousMatchup.stats.vTeam;
      statsCopy.vTeam = previousMatchup.stats.hTeam;

      return statsCopy;
    }
  };
  const stats = gameStats || arrangeData();
  const renderTeamLeaders = (leaders, isAway) => {
    console.log(stats, "stats");
    return Object.keys(leaders).map((keyName, i) => {
      const stats = leaders[keyName];
      const associatedPlayer = stats.players.length
        ? findPlayer(stats.players[0].personId)
        : { lastName: "", photo: null };

      return (
        <div key={i}>
          <div
            className="stat-leaders"
            style={{ flexDirection: isAway ? "row-reverse" : "row" }}
          >
            <img
              src={associatedPlayer.photo}
              onError={e => {
                e.target.src = avatar;
              }}
              alt="Player picture"
            />
            <p>{associatedPlayer.lastName}</p>
            <p className="stat-matchup-value">{stats.value}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="team-leaders-container">
      <div className="stat-leaders-wrapper">
        {renderTeamLeaders(stats.hTeam.leaders)}
      </div>
      <div className="stat-leaders-wrapper">
        <div className="stat-categories">
          <p>Points</p>
          <p>Rebounds</p>
          <p>Assists</p>
        </div>
      </div>
      <div className="stat-leaders-wrapper">
        {renderTeamLeaders(stats.vTeam.leaders, true)}
      </div>
    </div>
  );
};

export default MatchUp;
