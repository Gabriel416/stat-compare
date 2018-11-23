import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./modules";

const initialState = {};

const composedEnhancers = compose(applyMiddleware(thunkMiddleware));

export default createStore(rootReducer, initialState, composedEnhancers);
