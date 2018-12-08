import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./modules";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "root",
  storage
};

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);
export const persistor = persistStore(store);
