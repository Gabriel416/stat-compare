import { getData } from "./http";
import { playersUrl } from "../config";

const SET_PLAYERS_DATA = "SET_PLAYERS_DATA";

const initialState = {
  playersData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS_DATA: {
      return {
        ...state,
        playersData: action.payload
      };
    }
    default:
      return state;
  }
};

export const fetchPlayersData = () => {
  return async dispatch => {
    const playersData = await dispatch(getData(playersUrl));
    // vegas for some reason is the standard 30 team nba list
    dispatch({ type: SET_PLAYERS_DATA, payload: playersData.league.vegas });
  };
};
