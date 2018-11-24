import jsonp from "jsonp";
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

    // jsonp(url, null, (err, data) => {
    //   if (err) {
    //     dispatch({ type: IS_LOADING, payload: false });
    //     console.error(err.message);
    //   } else {
    //     dispatch({ type: IS_LOADING, payload: false });
    //     console.log(data);
    //     return data;
    //   }
    // });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: IS_LOADING, payload: false });
        console.log(response, "response");
        return response;
      })
      .catch(error => {
        dispatch({ type: IS_LOADING, payload: false });
        return error;
        console.log(error);
      });
  };
};
