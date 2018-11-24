import React from "react";
import { todaysDate, teamStyles } from "../../config";

const Scoreboard = ({ scoreboardData, teams }) => {
  const { scoreBoardGames, numberOfGames } = scoreboardData;
  const renderGames = () => {
    const { scoreBoardGames } = scoreboardData;

    return scoreBoardGames.map(game => {
      console.log(game.hTeam.teamId, "game");
      const homeTeam = teams.find(team => team.teamId === game.hTeam.teamId);
      const awayTeam = teams.find(team => team.teamId === game.vTeam.teamId);
      console.log("homeTeam :", homeTeam);
      return (
        <div className="game-card-wrapper">
          <span>
            <img
              src={teamStyles[homeTeam.urlName].logo}
              alt="home team logo"
              style={{ width: "60px", height: "60px" }}
            />
          </span>
        </div>
      );
    });
  };

  return (
    <div>
      <h3>Games</h3>
      <p>{todaysDate}</p>
      <div>{scoreBoardGames && teams && renderGames()}</div>
    </div>
  );
};

export default Scoreboard;
