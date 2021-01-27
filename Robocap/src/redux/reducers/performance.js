import {
  // get admin students
  GET_USER_ACCOUNTS_IN_PROGRESS,
  GET_USER_ACCOUNTS_SUCCESS,
  GET_USER_ACCOUNTS_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: SUCCESS,
  error: "",
  getAccounts: [],
  uiStateGetUserData: SUCCESS,
  errorGetUserData: "",
};

const getUserAccountList = (state = initilastate, action) => {
  switch (action.type) {
    case GET_USER_ACCOUNTS_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_USER_ACCOUNTS_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        getAccounts: action.payload.getAccounts,
      };

    case GET_USER_ACCOUNTS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    default:
      return state;
  }
};

export default getUserAccountList;
