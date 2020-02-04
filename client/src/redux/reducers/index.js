import { combineReducers } from "redux";
import auth from "./auth";
import quote from "./quote";
import trade from "./trade";
import alert from "./alert";
import spinner from "./spinner";

export default combineReducers({
    alert,
    auth,
    quote,
    trade,
    spinner
});
