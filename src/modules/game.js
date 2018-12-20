import { getData } from "./http";
import { boxScoreUrl, year, month, date } from "../config";

const SET_GAME_DATA = "SET_GAME_DATA";
const SET_STATS_TO_VIEW = "SET_STATS_TO_VIEW";
const SET_PREVIOUS_MATCHUP = "SET_PREVIOUS_MATCHUP";

const initialState = {
  gameData: null,
  statView: "matchUp",
  previousMatchup: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_DATA: {
      return {
        ...state,
        gameData: action.payload
      };
    }
    case SET_STATS_TO_VIEW: {
      return {
        ...state,
        statView: action.payload
      };
    }
    case SET_PREVIOUS_MATCHUP: {
      return {
        ...state,
        previousMatchup: action.payload
      };
    }
    default:
      return state;
  }
};

export const fetchGameData = gameId => {
  return async dispatch => {
    const gameData = await dispatch(
      getData(boxScoreUrl.replace("gameId", gameId))
    );
    const gameDate = `${year}${month}${date}`;

    const prevMatchUpUrl = boxScoreUrl
      .split("/")
      .reduce((acc, partialString) => {
        if (partialString.includes(gameDate)) {
          partialString = gameData.previousMatchup.gameDate;
        }
        return (acc += `${partialString}/`);
      }, "")
      .slice(0, -1);

    const previousMatchUp = await dispatch(
      getData(prevMatchUpUrl.replace("gameId", gameData.previousMatchup.gameId))
    );

    dispatch({
      type: SET_GAME_DATA,
      payload: gameData
    });
    dispatch({
      type: SET_PREVIOUS_MATCHUP,
      payload: previousMatchUp
    });
  };
};

export const changeStatView = statsToView => {
  return {
    type: SET_STATS_TO_VIEW,
    payload: statsToView
  };
};
