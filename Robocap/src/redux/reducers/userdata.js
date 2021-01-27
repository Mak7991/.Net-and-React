import {
  // get admin students
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,
  //create admin students
  // CREATE_ADMIN_STUDENTS_IN_PROGRESS,
  // CREATE_ADMIN_STUDENTS_SUCCESS,
  // CREATE_ADMIN_STUDENTS_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: SUCCESS,
  error: "",
  accountlist: [],
  uiStateGetUserData: SUCCESS,
  errorGetUserData: "",
  // accountlist: null,
};

const curUserData = (state = initilastate, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_DATA_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_CURRENT_USER_DATA_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        accountlist: action.payload.accountlist,
      };

    case GET_CURRENT_USER_DATA_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    default:
      return state;
  }
};

export default curUserData;
