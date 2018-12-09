import React from "react";
import classnames from "classnames";
import { teamStyles, playerHeadShot } from "../../config";
import "../player.css";

import PlayerHeadshot from "./PlayerHeadshot";
import PlayerInfo from "./PlayerInfo";
import Stats from "./Stats";
import ComparePlayer from "./ComparePlayer";

const Profile = ({
  selectedSearchResut,
  teams,
  playerToCompare,
  resetPlayerComparison
}) => {
  const renderPlayerData = (playerData, comparedPlayer) => {
    let player = {};
    player.team = teams.find(team => playerData.teamId === team.teamId);
    player.team.logo = teamStyles[player.team.urlName].logo;
    const mapObj = {
      teamId: playerData.teamId,
      personId: playerData.personId
    };
    player.photo = playerHeadShot.replace(
      /teamId|personId/gi,
      matched => mapObj[matched]
    );
    player.name = `${playerData.firstName} ${playerData.lastName}`;
    player.info = playerData;
    player.stats = playerData.playerStats;
    const { info, stats } = player;

    return (
      <div className="player-headshot col-sm-12">
        <div className="row">
          <div
            className={classnames(
              "player-headshot-wrapper col-sm-12",
              playerToCompare ? "col-md-12" : "col-md-6"
            )}
            style={{ height: `${playerToCompare ? "250px" : "500px"}` }}
          >
            <PlayerHeadshot player={player} />
          </div>
          <div
            className={classnames(
              "player-stat-wrapper col-sm-12",
              playerToCompare ? "col-md-12" : "col-md-6"
            )}
          >
            <PlayerInfo info={info} player={player} />
            <div className="player-stat-box">
              <Stats
                latestStats={stats.latest}
                careerStats={stats.careerSummary}
              />
            </div>
            {!comparedPlayer && (
              <ComparePlayer
                player={player}
                resetPlayerComparison={resetPlayerComparison}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <div
        className={classnames("col-sm-12", playerToCompare ? "col-md-6" : "")}
      >
        {renderPlayerData(selectedSearchResut)}
      </div>
      <div className="col-sm-12 col-md-6">
        {playerToCompare && renderPlayerData(playerToCompare, true)}
      </div>
    </div>
  );
};

export default Profile;
