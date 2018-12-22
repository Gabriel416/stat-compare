import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { teamStyles, uri } from "../../config";
import { calculateGameStatus } from "../../services/calculateGameStatus";
import "./scoreboard.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Scoreboard = ({
  scoreboardData,
  teams,
  calendarDate,
  changeScoreboardDate
}) => {
  const { scoreBoardGames } = scoreboardData;

  const renderGames = () => {
    return scoreBoardGames.map(game => {
      const homeTeam = teams.find(team => team.teamId === game.hTeam.teamId);
      const awayTeam = teams.find(team => team.teamId === game.vTeam.teamId);

      if (homeTeam && awayTeam) {
        return (
          <div
            className={classnames("col-sm-12 col-md-12 col-lg-6")}
            key={game.gameId}
          >
            <Link to={`${uri}/game/${game.gameId}`} className="game-link">
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
      }
    });
  };

  return (
    <div>
      <h3>Games</h3>
      <p>{calendarDate.humanReadable}</p>
      <DatePicker
        selected={new Date(calendarDate.fullDate)}
        onChange={date => changeScoreboardDate(date)}
      />
      <div className="container-fluid">
        <div className="row">
          {(scoreBoardGames &&
            scoreBoardGames.length &&
            teams &&
            renderGames()) || (
            <p className="scoreboard-no-games">
              No games we're played that day
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
