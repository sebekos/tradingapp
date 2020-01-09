import { combineReducers } from "redux";
import auth from "./auth";
import quote from "./quote";
import trade from './trade'
import alert from './alert'

export default combineReducers({
    alert,
    auth,
    quote,
    trade
});
