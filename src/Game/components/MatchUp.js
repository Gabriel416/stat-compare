import React from "react";
import findPlayer from "../../services/findPlayer";
import avatar from "../../images/avatar.png";
import arrangeTeamStats from "../../services/arrangeTeamStats";

const MatchUp = ({
  gameStats,
  basicGameData,
  previousMatchup,
  setSelectedSearchResult
}) => {
  let isPreviousMatchup = false;
  const arrangeData = () => {
    isPreviousMatchup = true;
    return arrangeTeamStats(basicGameData, previousMatchup);
  };

  const stats = gameStats || arrangeData();
  console.log(stats, "stats");
  const renderTeamLeaders = (leaders, isAway) => {
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
              src={associatedPlayer.photo || avatar}
              onClick={() => setSelectedSearchResult(associatedPlayer.info)}
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
    <div>
      <h6 className="text-center">
        {isPreviousMatchup ? "Team Leaders (Previous Matchup)" : "Team Leaders"}
      </h6>
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
    </div>
  );
};

export default MatchUp;
