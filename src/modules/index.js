import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import http from "./http";
import searchbar from "./searchbar";
import players from "./players";
import teams from "./teams";
import scoreboard from "./scoreboard";
import game from "./game";

export default history =>
  combineReducers({
    router: connectRouter(history),
    http,
    searchbar,
    players,
    teams,
    scoreboard,
    game
  });
