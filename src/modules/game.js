import { getData } from "./http";
import { boxScoreUrl } from "../config";

const SET_GAME_DATA = "SET_GAME_DATA";
const SET_STATS_TO_VIEW = "SET_STATS_TO_VIEW";

const initialState = {
  gameData: null,
  statView: "matchUp"
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
    default:
      return state;
  }
};

export const fetchGameData = gameId => {
  console.log(boxScoreUrl.replace("gameId", gameId), "HIT");
  return async dispatch => {
    const gameData = await dispatch(
      getData(boxScoreUrl.replace("gameId", gameId))
    );
    console.log(gameData, "HERE hello");
    dispatch({
      type: SET_GAME_DATA,
      payload: gameData
    });
  };
};

export const changeStatView = statsToView => {
  return {
    type: SET_STATS_TO_VIEW,
    payload: statsToView
  };
};
