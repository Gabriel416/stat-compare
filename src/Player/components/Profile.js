import React from "react";
import classnames from "classnames";
import findPlayer from "../../services/findPlayer";
import "../player.css";

import PlayerHeadshot from "./PlayerHeadshot";
import PlayerInfo from "./PlayerInfo";
import Stats from "./Stats";
import ComparePlayer from "./ComparePlayer";

const Profile = ({
  selectedSearchResut,
  playerToCompare,
  resetPlayerComparison
}) => {
  const renderPlayerData = (playerData, comparedPlayer) => {
    let player = findPlayer(playerData.personId);
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
