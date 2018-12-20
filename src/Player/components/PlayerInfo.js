import React from "react";
import moment from "moment";

const PlayerInfo = ({ info, player }) => {
  return (
    <div>
      <h1>{`#${info.jersey} | ${player.firstName} ${player.lastName}`}</h1>
      <p className="player-info">
        {`Pos. ${info.pos} / ${info.heightFeet}'${info.heightInches}" / ${
          info.weightPounds
        }lb / Age: ${moment().diff(info.dateOfBirthUTC, "years")} / Country: ${
          info.country
        }`}
      </p>
    </div>
  );
};

export default PlayerInfo;
