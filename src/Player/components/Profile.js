import React from "react";
import classnames from "classnames";
import moment from "moment";
import { teamStyles, playerHeadShot } from "../../config";
import avatar from "../../images/avatar.png";
import "../player.css";

import Stats from "./Stats";

const Profile = ({ selectedSearchResut, teams, players }) => {
  const renderPlayerData = () => {
    let player = {};
    player.team = teams.find(
      team => selectedSearchResut.teamId === team.teamId
    );
    player.team.logo = teamStyles[player.team.urlName].logo;
    const mapObj = {
      teamId: selectedSearchResut.teamId,
      personId: selectedSearchResut.personId
    };
    player.photo = playerHeadShot.replace(
      /teamId|personId/gi,
      matched => mapObj[matched]
    );
    player.name = `${selectedSearchResut.firstName} ${
      selectedSearchResut.lastName
    }`;
    player.info = selectedSearchResut;
    player.stats = selectedSearchResut.playerStats;
    const { info, stats } = player;
    console.log(player, "player team");
    return (
      <div className="col-sm-12">
        <div className="row">
          <div className="player-headshot-wrapper col-sm-12 col-md-6">
            <div
              className="player-background"
              style={{
                background: `url(${player.team.logo}) no-repeat center`,
                backgroundSize: "contain"
              }}
            />
            <div className="player-content">
              <img
                src={player.photo}
                alt="player headshot"
                onError={e => {
                  e.target.src = avatar;
                }}
              />
            </div>
          </div>
          <div className="player-stat-wrapper col-sm-12 col-md-6">
            <h1>{`#${info.jersey} | ${player.name}`}</h1>
            <p className="player-info">{`Pos. ${info.pos} / ${
              info.heightFeet
            }'${info.heightInches}" / ${
              info.weightPounds
            }lb / Age: ${moment().diff(
              info.dateOfBirthUTC,
              "years"
            )} / Country: ${info.country}`}</p>
            <div className="player-stat-box">
              <Stats
                latestStats={stats.latest}
                careerStats={stats.careerSummary}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="player-headshot col-sm-12 col-md-12">
          {renderPlayerData()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
