import { getData } from "./http";
import { teamsUrl } from "../config";

const SET_TEAM_DATA = "SET_TEAM_DATA";

const initialState = {
  teamData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM_DATA: {
      return {
        ...state,
        teamData: action.payload
      };
    }
    default:
      return state;
  }
};

export const fetchTeamsData = () => {
  return async dispatch => {
    const teamsData = await dispatch(getData(teamsUrl));
    // vegas for some reason is the standard 30 team nba list
    dispatch({ type: SET_TEAM_DATA, payload: teamsData.league.vegas });
  };
};
