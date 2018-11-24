import { combineReducers } from "redux";
import http from "./http";
import searchbar from "./searchbar";
import players from "./players";
import teams from "./teams";
import scoreboard from "./scoreboard";

export default combineReducers({
  http,
  searchbar,
  players,
  teams,
  scoreboard
});
