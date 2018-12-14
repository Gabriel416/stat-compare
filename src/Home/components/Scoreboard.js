import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { todaysDate, teamStyles } from "../../config";
import "./scoreboard.css";

const Scoreboard = ({ scoreboardData, teams, fetchGameData }) => {
  const { scoreBoardGames, numberOfGames } = scoreboardData;

  const calculateGameStatus = game => {
    // Game hasn't started
    if (!game.isGameActivated && !parseFloat(game.gameDuration.minutes)) {
      return (
        <div>
          <span>Game starts</span>
          <br />
          <span>{game.startTimeEastern}</span>
        </div>
      );
    }

    if (game.period.isHalftime) {
      return <span>Halftime</span>;
    }

    // Game is over and no overtime
    if (game.extendedStatusNum === 0 && !game.isGameActivated) {
      return <span>Final</span>;
    }

    // Game is in overtime
    if (game.extendedStatusNum > 0 && game.isGameActivated) {
      return <span>Overtime {game.clock}</span>;
    }

    return (
      <div>
        <span>{`Q${game.period.current}`}</span>
        <br />
        <span>{game.clock}</span>
      </div>
    );
  };

  const renderGames = () => {
    const { scoreBoardGames } = scoreboardData;

    return scoreBoardGames.map(game => {
      const homeTeam = teams.find(team => team.teamId === game.hTeam.teamId);
      const awayTeam = teams.find(team => team.teamId === game.vTeam.teamId);

      return (
        <div
          className={classnames("col-sm-12 col-md-12 col-lg-6")}
          key={game.gameId}
        >
          <Link
            to={`/game/${game.gameId}`}
            className="game-link"
            onClick={() => fetchGameData(game.gameId)}
          >
            <div className="col-sm-12 game-card-wrapper">
              <div className={classnames("home-team-section")}>
                <img
                  src={teamStyles[homeTeam.urlName].logo}
                  alt="home team logo"
                />
                <div>
                  <span>{homeTeam.nickname}</span>
                  <br />
                  <span>{`${game.hTeam.win}-${game.hTeam.loss}`}</span>
                </div>
              </div>

              <div className={classnames("game-status")}>
                <span className="home-score">{game.hTeam.score || 0}</span>
                {calculateGameStatus(game)}
                <span className="away-score">{game.vTeam.score || 0}</span>
              </div>

              <div className={classnames("away-team-section")}>
                <img
                  src={teamStyles[awayTeam.urlName].logo}
                  alt="away team logo"
                />
                <div>
                  <span>{awayTeam.nickname}</span>
                  <br />
                  <span>{`${game.vTeam.win}-${game.vTeam.loss}`}</span>
                </div>
              </div>
              <p className="col-sm-12 game-nugget">
                {game.nugget ? game.nugget.text : ""}
              </p>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      <h3>Games</h3>
      <p>{todaysDate}</p>
      <div className="container-fluid">
        <div className="row">{scoreBoardGames && teams && renderGames()}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
