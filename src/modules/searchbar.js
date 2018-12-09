import { push } from "connected-react-router";
import { getData } from "./http";
import { playerToCompare } from "./players";
import { playerStatsUrl } from "../config";

const SEARCH_INPUT_CHANGE = "SEARCH_INPUT_CHANGE";
const PLAYER_INPUT_CHANGE = "PLAYER_INPUT_CHANGE";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
const SET_PLAYER_SEARCH_RESULTS = "SET_PLAYER_SEARCH_RESULTS";
const SET_SELECTED_SEARCH_RESULT = "SET_SELECTED_SEARCH_RESULT";
const RESET_SEARCHBAR = "RESET_SEARCHBAR";

const initialState = {
  searchValue: "",
  searchResults: null,
  selectedSearchResult: null,
  playerSearchValue: "",
  playerSearchResults: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE: {
      return {
        ...state,
        searchValue: action.payload
      };
    }
    case PLAYER_INPUT_CHANGE: {
      return {
        ...state,
        playerSearchValue: action.payload
      };
    }
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case SET_PLAYER_SEARCH_RESULTS: {
      return {
        ...state,
        playerSearchResults: action.payload
      };
    }
    case SET_SELECTED_SEARCH_RESULT: {
      return {
        ...state,
        selectedSearchResult: action.payload
      };
    }
    case RESET_SEARCHBAR: {
      return {
        ...state,
        searchValue: initialState.searchValue,
        searchResults: initialState.searchResults,
        playerSearchValue: initialState.playerSearchValue,
        playerSearchResults: initialState.playerSearchResults
      };
    }
    default:
      return state;
  }
};

export const setSearchValue = (searchValue, searchType) => {
  return (dispatch, getState) => {
    if (searchType === "player") {
      dispatch({
        type: PLAYER_INPUT_CHANGE,
        payload: searchValue
      });
      dispatch(setSearchResults(getState().searchbar.playerSearchValue));
    } else {
      dispatch({
        type: SEARCH_INPUT_CHANGE,
        payload: searchValue
      });
      dispatch(setSearchResults(getState().searchbar.searchValue));
    }
  };
};

export const setSearchResults = search => {
  return (dispatch, getState) => {
    const currentSearch = search;

    const matchedPlayers = getState().players.playerData.filter(player => {
      const playerName = `${player.firstName} ${player.lastName}`;
      return playerName
        .trim()
        .toLowerCase()
        .includes(currentSearch.trim().toLowerCase());
    });
    const matchedTeams = getState().teams.teamData.filter(team => {
      return (
        team.fullName
          .trim()
          .toLowerCase()
          .includes(currentSearch) ||
        team.urlName
          .trim()
          .toLowerCase()
          .includes(currentSearch)
      );
    });

    if (!currentSearch) {
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: null
      });
    } else {
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: [...matchedTeams, ...matchedPlayers]
      });
      dispatch({
        type: SET_PLAYER_SEARCH_RESULTS,
        payload: matchedPlayers
      });
    }
  };
};

export const setSelectedSearchResult = searchResult => {
  return async dispatch => {
    dispatch(resetSearchbar());
    if (searchResult.personId) {
      const playerStats = await dispatch(
        getData(playerStatsUrl.replace("personId", searchResult.personId))
      );
      dispatch({
        type: SET_SELECTED_SEARCH_RESULT,
        payload: {
          ...searchResult,
          playerStats: playerStats.league.standard.stats
        }
      });
      dispatch(push(`/player/${searchResult.personId}`));
    } else {
      dispatch({
        type: SET_SELECTED_SEARCH_RESULT,
        payload: searchResult
      });
      dispatch(push(`/team/${searchResult.teamId}`));
    }
  };
};

export const setComparedPlayer = searchResult => {
  return async dispatch => {
    dispatch(resetSearchbar());
    const playerStats = await dispatch(
      getData(playerStatsUrl.replace("personId", searchResult.personId))
    );

    dispatch(
      playerToCompare({
        ...searchResult,
        playerStats: playerStats.league.standard.stats
      })
    );
  };
};

export const resetSearchbar = () => {
  return {
    type: RESET_SEARCHBAR
  };
};
