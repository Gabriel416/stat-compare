import React from "react";

const Stats = ({ latestStats, careerStats }) => {
  const renderPlayerStats = stats => {
    return (
      <div className="stat-wrapper">
        <h6>
          {stats.seasonYear
            ? `${stats.seasonYear}-${stats.seasonYear + 1} Season`
            : "Career Stats"}
        </h6>
        <div className="row stat-row">
          <div>
            <p>PPG</p>
            <p>{stats.ppg}</p>
          </div>
          <div>
            <p>RPG</p>
            <p>{stats.rpg}</p>
          </div>
          <div>
            <p>APG</p>
            <p>{stats.apg}</p>
          </div>
          <div>
            <p>BPG</p>
            <p>{stats.bpg}</p>
          </div>
          <div>
            <p>SPG</p>
            <p>{stats.spg}</p>
          </div>
          <div>
            <p>FG%</p>
            <p>{stats.fgp}%</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderPlayerStats(latestStats)}
      <hr />
      {renderPlayerStats(careerStats)}
    </div>
  );
};

export default Stats;
