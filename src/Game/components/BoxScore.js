import React from "react";
import avatar from "../../images/avatar.png";
import arrangeTeamStats from "../../services/arrangeTeamStats";
import findPlayer from "../../services/findPlayer";

const BoxScore = ({
  teams,
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
  const renderBoxScoreTable = stats => {
    const homeTeamId = basicGameData.hTeam.teamId;
    const activePlayers = [
      ...stats.activePlayers.filter(player => player.teamId === homeTeamId),
      ...stats.activePlayers.filter(player => player.teamId !== homeTeamId)
    ];
    return activePlayers.map(player => {
      const playerData = findPlayer(player.personId);
      const playerName = `${playerData.firstName} ${playerData.lastName}`;
      return (
        <tr key={player.personId}>
          <td
            scope="row"
            className="player-data"
            onClick={() => playerData.photo && setSelectedSearchResult(player)}
          >
            <img src={playerData.photo || avatar} alt="player image" />
            <br />
            {playerName}
          </td>
          <td>{player.points}</td>
          <td>{player.totReb}</td>
          <td>{player.assists}</td>
          <td>{player.steals}</td>
          <td>{player.blocks}</td>
          <td>{player.min}</td>
          <td>{player.fgp}%</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h6 className="text-center">
        {isPreviousMatchup ? "Box Score (Previous Matchup)" : "Box Score"}
      </h6>

      <div className="previous-matchup-final">
        {stats && (
          <div>
            <span>
              {
                teams.find(team => team.teamId === basicGameData.hTeam.teamId)
                  .urlName
              }
            </span>
            <h3>{stats.hTeam.totals.points}</h3>
            <h3>{stats.vTeam.totals.points}</h3>
            <span>
              {
                teams.find(team => team.teamId === basicGameData.vTeam.teamId)
                  .urlName
              }
            </span>
          </div>
        )}
      </div>
      <div className="table-responsive text-left">
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Points</th>
              <th scope="col">Rebounds</th>
              <th scope="col">Assists</th>
              <th scope="col">Steals</th>
              <th scope="col">Blocks</th>
              <th scope="col">Min.</th>
              <th scope="col">FG%</th>
            </tr>
          </thead>
          <tbody>{stats && renderBoxScoreTable(stats)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default BoxScore;
