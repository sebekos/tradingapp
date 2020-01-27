import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
