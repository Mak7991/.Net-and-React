import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import login from "./login";
import message from "./message";
import curUserData from "./userdata";
import getGraphData from "./graphData";
import getUserActivity from "./activity";
import getHistory from "./ManageTransfer";
import getUserAccountList from "./performance";
import getUserValues from "./curUserData";
import statusReducer from "./userAccStatus";
import adminAccountList from "./getAccountlist";
import getAdminUserList from "./getUserList";
import register from "./userSignUp"
import userAccountMapping from "./AccountMapping"
import updateNewPassword from "./setPassword"

const encryptor = encryptTransform({
  secretKey: "!catalyst@",
  onError(error) {
    console.log(error);
  },
});

const persistConfig = {
  key: "auth",
  storage: storage,
  transforms: [encryptor],
  whitelist: ["login"], //this shows which state u want to persist
};



const rootReducer = combineReducers({
  login,
  curUserData,
  message,
  getGraphData,
  getUserActivity,
  getHistory,
  getUserAccountList,
  getUserValues,
  statusReducer,
  adminAccountList,
  getAdminUserList,
  register,
  userAccountMapping,
  updateNewPassword
});

export default persistReducer(persistConfig, rootReducer);
