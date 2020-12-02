import { combineReducers } from "redux";
import login from "./login";
import message from "./message";

export default combineReducers({
  login,
  message,
});