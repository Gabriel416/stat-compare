import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./modules";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
export const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);
