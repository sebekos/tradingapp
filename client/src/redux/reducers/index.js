import { combineReducers } from "redux";
import auth from "./auth";
import quote from "./quote";

export default combineReducers({
    auth,
    quote
});
