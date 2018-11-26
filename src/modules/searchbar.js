const SEARCH_INPUT_CHANGE = "SEARCH_INPUT_CHANGE";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

const initialState = {
  searchValue: "",
  searchResults: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE: {
      return {
        ...state,
        searchValue: action.payload
      };
    }
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    default:
      return state;
  }
};

export const setSearchValue = searchValue => {
  return dispatch => {
    dispatch({
      type: SEARCH_INPUT_CHANGE,
      payload: searchValue
    });

    dispatch(setSearchResults());
  };
};

export const setSearchResults = () => {
  return (dispatch, getState) => {
    const currentSearch = getState().searchbar.searchValue;

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
    }
  };
};
