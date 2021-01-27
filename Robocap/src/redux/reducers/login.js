import {
  VALIDATE_USER_IN_PROGRESS,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILED,
  // login
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

// const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  loginButtonUiState: null,
  logOutButtonUiState: null,
  error: "",
  user: {},
  uiState: SUCCESS,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_USER_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
        user: {},
      };

    case VALIDATE_USER_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        user: action.payload.user,
        error: "",
      };

    case VALIDATE_USER_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
        user: {},
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
        logOutButtonUiState: SUCCESS,
      };

    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        loginButtonUiState: IN_PROGRESS,
        error: "",
        user: {},
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginButtonUiState: SUCCESS,
        user: action.payload.user,
        error: "",
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error,
        loginButtonUiState: FAILED,
        user: {},
      };

    default:
      return state;
  }
};

export default login;
