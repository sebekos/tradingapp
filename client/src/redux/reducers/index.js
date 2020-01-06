import { combineReducers } from "redux";
import auth from "./auth";
import quote from "./quote";
import trade from './trade'

export default combineReducers({
    auth,
    quote,
    trade
});
