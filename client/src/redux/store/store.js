import { createStore } from "redux";
import rootReducer from "../reducers";

const intialState = {};

const store = createStore(rootReducer, intialState);

export default store;
