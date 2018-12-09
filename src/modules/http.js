import axios from "axios";
import { proxy } from "../config";

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
    default:
      return state;
  }
};

export const getData = url => {
  console.log(url, "http hit");
  return dispatch => {
    dispatch({ type: IS_LOADING, payload: true });
    return axios
      .get(proxy + url)
      .then(response => {
        dispatch({ type: IS_LOADING, payload: false });
        console.log(response, "response");
        return response.data;
      })
      .catch(error => {
        dispatch({ type: IS_LOADING, payload: false });
        console.log(error);
        return error;
      });
  };
};
