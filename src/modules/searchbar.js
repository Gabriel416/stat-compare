const SEARCH_INPUT_CHANGE = "SEARCH_INPUT_CHANGE";

const initialState = {
  searchValue: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE: {
      return {
        ...state,
        searchValue: action.payload
      };
    }
    default:
      return state;
  }
};

export const setSearchValue = searchValue => {
  return {
    type: SEARCH_INPUT_CHANGE,
    payload: searchValue
  };
};
