import React from "react";

export const calculateGameStatus = game => {
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
