import {
    // user SignUp
    SIGNUP_IN_PROGRESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
  // set verification code
  SENT_VERIFICATION_CODE_IN_PROGRESS,
  SENT_VERIFICATION_CODE_SUCCESS,
  SENT_VERIFICATION_CODE_FAILED,
  } from "constants/action";
  import axios from "axios";
  
  import { REACT_APP_SERVER_URL } from "server/server";


// user SignUp
export const userSignUp = (
    userID,
    userName,
    firstname,
    emailID,
    code,
    password,
    confirmPassword,
    PhoneNo
  ) => {
    // console.log(emailID + " " + password);
    const res = axios.post(REACT_APP_SERVER_URL + "Registration", {
      userID,
      userName,
      firstname,
      emailID,
      code,
      password,
      confirmPassword,
      PhoneNo,
    });
    return (dispatch) => {
      res
        .then((res) => {
          const { data } = res;
        //   console.log(res, "SIGNUP_SUCCESS");
          dispatch(setSignUpInProgress(data));
          console.log(res.data, "SIGNUP_IN_PROGRESS");
          dispatch(setSignUpSuccess(data));
          // localStorage.setItem("newUser", JSON.stringify(data));
          console.log(res.data, "SIGNUP_SUCCESS");
        })
        .catch((err) => {
          
          dispatch(setSignUpError(err.message));
          console.log(err.response, "SIGNUP_FAILED");
          return err.message;
        });
    };
  };
  
  const setSignUpInProgress = () => {
    return {
      type: SIGNUP_IN_PROGRESS,
      payload: {},
    };
  };
  const setSignUpSuccess = (signUpUsers) => {
    return {
      type: SIGNUP_SUCCESS,
      payload: {
        signUpUsers,
      },
    };
  };
  const setSignUpError = (error) => {
    return {
      type: SIGNUP_FAILED,
      payload: {
        error,
      },
    };
  };

  
// Sent verification code
export const sentVerificationCode = (emailID, userName) => {
    const res = axios.get(REACT_APP_SERVER_URL + "Registration?EmailID=" + emailID + "&" + "userName=" + userName + "");
    // console.log(userName)
    return (dispatch) => {
      res
        .then((res) => {
          const { data } = res;
          // console.log(res, "SENT_VERIFICATION_CODE_SUCCESS");
          dispatch(setVerificationCodeInProgress(data));
          // console.log(res.data);
          dispatch(setVerificationCodeSuccess(res.data));
          // localStorage.setItem("verificationcode", JSON.stringify(res.data));
          // console.log(res.data);
        })
        .catch((err) => {
          // console.log(err.response, "SENT_VERIFICATION_CODE_FAILED");
          dispatch(setVerificationCodeError(err.message));
          return err;
        });
    };
  };
  const setVerificationCodeInProgress = () => {
    return {
      type: SENT_VERIFICATION_CODE_IN_PROGRESS,
      payload: {},
    };
  };
  const setVerificationCodeSuccess = (code) => {
    return {
      type: SENT_VERIFICATION_CODE_SUCCESS,
      payload: {
        code,
      },
    };
  };
  const setVerificationCodeError = (error) => {
    return {
      type: SENT_VERIFICATION_CODE_FAILED,
      payload: {
        error,
      },
    };
  };

  export default {
    userSignUp,
    sentVerificationCode,
  };