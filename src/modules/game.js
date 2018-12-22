import { getData } from "./http";
import { boxScoreUrl } from "../config";

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
  return async (dispatch, getState) => {
    let mapObj = {
      timeStamp: getState().scoreboard.calendarDate.urlDate,
      gameId
    };
    const gameUrl = boxScoreUrl.replace(
      /timeStamp|gameId/gi,
      matched => mapObj[matched]
    );

    const gameData = await dispatch(getData(gameUrl));

    if (gameData.previousMatchup) {
      mapObj = {
        timeStamp: gameData.previousMatchup.gameDate,
        gameId: gameData.previousMatchup.gameId
      };
      const prevMatchUpUrl = boxScoreUrl.replace(
        /timeStamp|gameId/gi,
        matched => mapObj[matched]
      );

      const previousMatchUp = await dispatch(getData(prevMatchUpUrl));

      dispatch({
        type: SET_PREVIOUS_MATCHUP,
        payload: previousMatchUp
      });
    }

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
