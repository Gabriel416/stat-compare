import React from "react";
import avatar from "../../images/avatar.png";

const PlayerHeadshot = ({ player }) => {
  return (
    <div>
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
  );
};

export default PlayerHeadshot;
