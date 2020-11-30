import { combineReducers } from "redux";
import auth from "./loginAction";
import message from "./message";

export default combineReducers({
  auth,
  message,
});