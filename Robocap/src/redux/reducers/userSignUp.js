import {
  // sent verification code
  SENT_VERIFICATION_CODE_IN_PROGRESS,
  SENT_VERIFICATION_CODE_SUCCESS,
  SENT_VERIFICATION_CODE_FAILED,
  // user SignUp
  SIGNUP_IN_PROGRESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

// const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  sentVerificatoCodeUiState: null,
  uiStateUserSignUp: null,
  errorUserSignUp: "",
  error: "",
  code: [],
  signUpUsers: [],
  uiState: SUCCESS,
  signUpUser: null,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_IN_PROGRESS:
      return {
        ...state,
        uiStateUserSignUp: IN_PROGRESS,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        uiStateUserSignUp: SUCCESS,
        signUpUser: action.payload.signUpUser,
        signUpUsers: [...state.signUpUsers, action.payload.signUpUser],
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        errorUserSignUp: action.payload.error,
        uiStateUserSignUp: FAILED,
      };
    case SENT_VERIFICATION_CODE_IN_PROGRESS:
      return {
        ...state,
        sentVerificatoCodeUiState: IN_PROGRESS,
        error: "",
      };

    case SENT_VERIFICATION_CODE_SUCCESS:
      return {
        ...state,
        sentVerificatoCodeUiState: SUCCESS,
        error: "",
      };

    case SENT_VERIFICATION_CODE_FAILED:
      return {
        ...state,
        error: action.payload.error,
        sentVerificatoCodeUiState: FAILED,
      };
    default:
      return state;
  }
};

export default register;
