import {
  // get admin account list
  GET_ACCOUNT_LIST_IN_PROGRESS,
  GET_ACCOUNT_LIST_SUCCESS,
  GET_ACCOUNT_LIST_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: SUCCESS,
  error: "",
  adminAccounts: [],
  uiStateGetAccountList: SUCCESS,
  errorGetAccountList: "",
};

const adminAccountList = (state = initilastate, action) => {
  switch (action.type) {
    case GET_ACCOUNT_LIST_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_ACCOUNT_LIST_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        adminAccounts: action.payload.adminAccounts,
      };

    case GET_ACCOUNT_LIST_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    default:
      return state;
  }
};

export default adminAccountList;
