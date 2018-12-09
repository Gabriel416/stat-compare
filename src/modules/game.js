import { getData } from "./http";
import { boxScoreUrl } from "../config";

const SET_GAME_DATA = "SET_GAME_DATA";
const SET_COMPARED_PLAYER = "SET_COMPARED_PLAYER";
const RESET_COMPARED_PLAYER = "RESET_COMPARED_PLAYER";

const initialState = {
  gameData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_DATA: {
      return {
        ...state,
        gameData: action.payload
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
    console.log("HERE hello");
    dispatch({
      type: SET_GAME_DATA,
      payload: gameData
    });
  };
};

export const playerToCompare = player => {
  return {
    type: SET_COMPARED_PLAYER,
    payload: player
  };
};

export const resetPlayerComparison = () => {
  return {
    type: RESET_COMPARED_PLAYER
  };
};
