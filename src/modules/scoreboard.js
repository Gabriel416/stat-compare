import { getData } from "./http";
import { scoreBoardUrl } from "../config";

const SET_SCOREBOARD_DATA = "SET_SCOREBOARD_DATA";

const initialState = {
  scoreBoardGames: null,
  numberOfGames: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCOREBOARD_DATA: {
      return {
        ...state,
        scoreBoardGames: action.payload.games,
        numberOfGames: action.payload.numGames
      };
    }
    default:
      return state;
  }
};

export const fetchScoreboardData = () => {
  return async dispatch => {
    const scoreBoardData = await dispatch(getData(scoreBoardUrl));
    dispatch({ type: SET_SCOREBOARD_DATA, payload: scoreBoardData });
  };
};
