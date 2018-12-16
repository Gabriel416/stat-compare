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

  const renderQuarterScore = (homeScores, awayScores) => {
    if (!homeScores.length && awayScores.length) {
      homeScores = [{ score: 0 }, { score: 0 }, { score: 0 }, { score: 0 }];
      awayScores = [{ score: 0 }, { score: 0 }, { score: 0 }, { score: 0 }];
    }

    const totalHomeScore = homeScores.reduce((acc, quarter) => {
      return (acc += Number(quarter.score));
    }, 0);

    const totalAwayScore = awayScores.reduce((acc, quarter) => {
      return (acc += Number(quarter.score));
    }, 0);

    const quarterScores = homeScores.map((homeScore, i) => {
      return (
        <div className="score-breakdown-section">
          <p>{homeScore.score}</p>
          <p>{`Q${i + 1}`}</p>
          <p>{awayScores[i].score}</p>
        </div>
      );
    });

    return (
      <div>
        {quarterScores}
        <div className="score-breakdown-section">
          <p>{totalHomeScore}</p>
          <p>TOT</p>
          <p>{totalAwayScore}</p>
        </div>
      </div>
    );
  };

  const renderScoreOverview = () => {
    const homeTeamScore = basicGameData.hTeam.linescore;
    const awayTeamScore = basicGameData.vTeam.linescore;
    return (
      <div className="score-overview-wrapper">
        {renderQuarterScore(homeTeamScore, awayTeamScore)}
      </div>
    );
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
