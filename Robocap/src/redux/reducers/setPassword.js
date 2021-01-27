import {
  //update password
  UPDATE_PASSWORD_IN_PROGRESS,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiStateSetPassword: null,
  errorSetPassword: "",
  newPassword: [],
  setPassword: null,
  uiState: SUCCESS,
  error: "",
};

const updateNewPassword = (state = initilastate, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_IN_PROGRESS:
      return {
        ...state,
        uiStateSetPassword: IN_PROGRESS,
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        uiStateSetPassword: SUCCESS,
        setPassword: action.payload.setPassword,
        newPassword: [...state.newPassword, action.payload.setPassword],
      };

    case UPDATE_PASSWORD_FAILED:
      return {
        ...state,
        errorSetPassword: action.payload.error,
        uiStateSetPassword: FAILED,
      };
    default:
      return state;
  }
};
export default updateNewPassword;
