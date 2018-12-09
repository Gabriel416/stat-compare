import { getData } from "./http";
import { playersUrl } from "../config";

const SET_PLAYERS_DATA = "SET_PLAYERS_DATA";
const SET_COMPARED_PLAYER = "SET_COMPARED_PLAYER";
const RESET_COMPARED_PLAYER = "RESET_COMPARED_PLAYER";

const initialState = {
  playerData: null,
  playerToCompare: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS_DATA: {
      return {
        ...state,
        playerData: action.payload
      };
    }
    case SET_COMPARED_PLAYER: {
      return {
        ...state,
        playerToCompare: action.payload
      };
    }
    case RESET_COMPARED_PLAYER: {
      return {
        ...state,
        playerToCompare: initialState.playerToCompare
      };
    }
    default:
      return state;
  }
};

export const fetchPlayersData = () => {
  return async dispatch => {
    const playersData = await dispatch(getData(playersUrl));
    dispatch({
      type: SET_PLAYERS_DATA,
      payload: playersData.league.standard
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
