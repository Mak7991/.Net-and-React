import {
  // get account status
  GET_ACCOUNT_STATUS_IN_PROGRESS,
  GET_ACCOUNT_STATUS_SUCCESS,
  GET_ACCOUNT_STATUS_FAILED,
  // upload status
  UPLOAD_STATUS_IN_PROGRESS,
  UPLOAD_STATUS_SUCCESS,
  UPLOAD_STATUS_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiStateGetAccountStatus: SUCCESS,
  uiStateUploadStatus: null,
  errorUploadStatus: "",
  uploadStatus: [],
  uploadStat: null,
  uiState: SUCCESS,
  error: "",
  status: [],
  errorGetAccountStatus: "",
};

const statusReducer = (state = initilastate, action) => {
  switch (action.type) {
    case GET_ACCOUNT_STATUS_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_ACCOUNT_STATUS_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        status: action.payload.status,
      };

    case GET_ACCOUNT_STATUS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    case UPLOAD_STATUS_IN_PROGRESS:
      return {
        ...state,
        uiStateUploadStatus: IN_PROGRESS,
      };

    case UPLOAD_STATUS_SUCCESS:
      return {
        ...state,
        uiStateUploadStatus: SUCCESS,
        uploadStat: action.payload.uploadStat,
        uploadStatus: [...state.uploadStatus, action.payload.uploadStat],
      };

    case UPLOAD_STATUS_FAILED:
      return {
        ...state,
        errorUploadStatus: action.payload.error,
        uiStateUploadStatus: FAILED,
      };
    default:
      return state;
  }
};

export default statusReducer;
