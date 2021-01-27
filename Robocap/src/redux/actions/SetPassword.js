import axios from "axios";
import {
 //update password
 UPDATE_PASSWORD_IN_PROGRESS,
 UPDATE_PASSWORD_SUCCESS,
 UPDATE_PASSWORD_FAILED,
} from "constants/action";
import { REACT_APP_SERVER_URL } from "server/server";


export const updatePassword = (userID, Password,NewPassword) => {
    const res = axios.post(REACT_APP_SERVER_URL + "Password/ChangePassword", {
      userID,
      Password,
      NewPassword
    });
    return (dispatch) => {
      res
        .then((res) => {
          const { data } = res;
          dispatch(setUpdatePasswordInProgress(data));
          console.log(res, "UPDATE_PASSWORD_IN_PROGRESS");
          dispatch(setUpdatePasswordSuccess(data));
          console.log(res, "UPDATE_PASSWORD_SUCCESS");
        })
        .catch((err) => {
          console.log(err.response, "UPDATE_PASSWORD_FAILED");
          dispatch(setUpdatePasswordError(err.message));
          return err;
        });
    };
  };
  
  const setUpdatePasswordInProgress = () => {
    return {
      type: UPDATE_PASSWORD_IN_PROGRESS,
      payload: {},
    };
  };
  const setUpdatePasswordSuccess = (newPassword) => {
    return {
      type: UPDATE_PASSWORD_SUCCESS,
      payload: {
        newPassword,
      },
    };
  };
  const setUpdatePasswordError = (error) => {
    return {
      type: UPDATE_PASSWORD_FAILED,
      payload: {
        error,
      },
    };
  };

  export default updatePassword;