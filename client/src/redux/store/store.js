import { createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {};

const store = createStore(rootReducer, intialState, composeWithDevTools());

export default store;
