import constants from "constants";
import { push } from "react-router-redux";
import _ from "lodash";
import Auth from "../auth";

import {
  incrementSavingQueue,
  decrementSavingQueue
} from "../scenes/EventForm/modules/event";

const auth = new Auth();

const uri = constants.uri;

/*New Constants*/
const IS_FETCHING_ASSETS = "IS_FETCHING_ASSETS";
const ASSETS_FETCHED = "ASSETS_FETCHED";
const FILTER_CLICKED = "FILTER_CLICKED";
const SEARCH_INPUT_CHANGE = "SEARCH_INPUT_CHANGE";
const IS_DELETING_ASSET = "IS_DELETING_ASSET";
const DELETED_ASSET = "DELETED_ASSET";

/*End new constants*/
const initialState = {
  assetsData: [],
  isFetchingAssets: true,
  pagination: {
    total: null,
    per_page: 10,
    current_page: null,
    path: null,
    last_page: null,
    last_page_url: null,
    first_page_url: null,
    next_page_url: null,
    prev_page_url: null
  },
  asset: "default",
  searchValue: "",
  isDeletingAsset: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_ASSETS: {
      return {
        ...state,
        isFetchingAssets: true,
        isDeletingAsset: false
      };
    }
    case ASSETS_FETCHED: {
      return {
        ...state,
        assetsData: action.payload.data,
        pagination: _.omit(action.payload, ["data"]),
        isFetchingAssets: false
      };
    }
    case IS_DELETING_ASSET: {
      return {
        ...state,
        isDeletingAsset: true
      };
    }
    case DELETED_ASSET: {
      return {
        ...state,
        isDeletingAsset: false
      };
    }
    case FILTER_CLICKED: {
      return {
        ...state,
        asset: action.payload
      };
    }
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

/*New functions*/
export const getAssets = (
  paginatedUrl,
  pageCount = 10,
  search = null,
  asset = "default"
) => {
  return dispatch => {
    dispatch({ type: IS_FETCHING_ASSETS });
    const url = paginatedUrl || `${uri}/assets`;
    const data = {
      pageCount,
      search,
      asset
    };
    axios
      .get(url, { params: data })
      .then(res => {
        dispatch({
          type: ASSETS_FETCHED,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteAsset = (assetId, assetName) => {
  return dispatch => {
    dispatch({ type: IS_DELETING_ASSET });
    const url = `${uri}/asset/${assetName}/${assetId}`;
    axios
      .delete(url)
      .then(res => {
        dispatch({
          type: DELETED_ASSET,
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const filterClick = (asset = "default") => {
  return dispatch => {
    dispatch({
      type: FILTER_CLICKED,
      payload: asset
    });
  };
};

export const searchInputChange = (search = "") => {
  return dispatch => {
    dispatch({
      type: SEARCH_INPUT_CHANGE,
      payload: search
    });
  };
};

/*End new functions*/
