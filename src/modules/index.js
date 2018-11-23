import { combineReducers } from "redux";
import http from "./http";
import searchbar from "./searchbar";

export default combineReducers({
  http,
  searchbar
});
