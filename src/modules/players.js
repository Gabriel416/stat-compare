import axios from "axios";

const IS_LOADING = "IS_LOADING";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    // case ASSETS_FETCHED: {
    //   return {
    //     ...state,
    //     assetsData: action.payload.data,
    //     pagination: _.omit(action.payload, ["data"]),
    //     isFetchingAssets: false
    //   };
    // }
    // case IS_DELETING_ASSET: {
    //   return {
    //     ...state,
    //     isDeletingAsset: true
    //   };
    // }
    // case DELETED_ASSET: {
    //   return {
    //     ...state,
    //     isDeletingAsset: false
    //   };
    // }
    // case FILTER_CLICKED: {
    //   return {
    //     ...state,
    //     asset: action.payload
    //   };
    // }
    // case SEARCH_INPUT_CHANGE: {
    //   return {
    //     ...state,
    //     searchValue: action.payload
    //   };
    // }
    default:
      return state;
  }
};

export const getData = url => {
  return dispatch => {
    dispatch({ type: IS_LOADING, payload: true });
    axios
      .get(url)
      .then(res => {
        dispatch({ type: IS_LOADING, payload: false });
        console.log(res, "res");
      })
      .catch(error => {
        dispatch({ type: IS_LOADING, payload: false });
        console.log(error);
      });
  };
};
