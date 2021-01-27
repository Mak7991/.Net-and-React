import {
  // get total graph data
  GET_TOTAL_GRAPH_DATA_IN_PROGRESS,
  GET_TOTAL_GRAPH_DATA_SUCCESS,
  GET_TOTAL_GRAPH_DATA_FAILED,
  //get return graph data
  GET_RETURN_GRAPH_DATA_IN_PROGRESS,
  GET_RETURN_GRAPH_DATA_SUCCESS,
  GET_RETURN_GRAPH_DATA_FAILED,
} from "constants/action";
import axios from "axios";
import { REACT_APP_SERVER_URL } from "server/server";

// get total manage graph
export const getTotalManageGraph = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "Performance/GetTotalMangedAssetGraph", {
        userID,
        accountno: "All",
      });
      const { data } = res;
      // console.log(res.data);
      dispatch(getTotalGraphDataInProgress(data));
      // localStorage.setItem("TMAgraph", JSON.stringify(data));
      dispatch(getTotalGraphDataSuccessful(data));
      // localStorage.setItem("TMAgraph", JSON.stringify(data));
      // console.log(data.netValue);
    } catch (err) {
      dispatch(getTotalGraphDataError(err));
      console.error(err);
    }
  };
};
const getTotalGraphDataInProgress = () => {
  return {
    type: GET_TOTAL_GRAPH_DATA_IN_PROGRESS,
    payload: {},
  };
};
const getTotalGraphDataSuccessful = (totalManageGraph) => {
  return {
    type: GET_TOTAL_GRAPH_DATA_SUCCESS,
    payload: {
      totalManageGraph,
    },
  };
};
const getTotalGraphDataError = (error) => {
  return {
    type: GET_TOTAL_GRAPH_DATA_FAILED,
    payload: {
      error,
    },
  };
};

// get total return graph
export const getTotalReturnGraph = (userID) => {
  return async (dispatch) => {
    // dispatch(getUserDataInProgress());
    try {
      const res = await axios.post(REACT_APP_SERVER_URL + "Performance/GetTotalReturn", {
        userID,
        accountno: "All",
      });
      // const { data } = res;
      // console.log(res.data);
      dispatch(getTotalReturnDataInProgress(res.data));
      // localStorage.setItem("TMAgraph", JSON.stringify(res.data));
      dispatch(getTotalReturnDataSuccessful(res.data));
      // localStorage.setItem("TMAgraph", JSON.stringify(res.data));
      // console.log(res.data);
      // const returnData = Object.values(res);
      // console.log(data);
    } catch (err) {
      dispatch(getTotalReturnDataError(err));
      console.error(err);
    }
  };
};

const getTotalReturnDataInProgress = () => {
  return {
    type: GET_RETURN_GRAPH_DATA_IN_PROGRESS,
    payload: {},
  };
};
const getTotalReturnDataSuccessful = (totalReturnGraph) => {
  return {
    type: GET_RETURN_GRAPH_DATA_SUCCESS,
    payload: {
      totalReturnGraph,
    },
  };
};
const getTotalReturnDataError = (error) => {
  return {
    type: GET_RETURN_GRAPH_DATA_FAILED,
    payload: {
      error,
    },
  };
};
export default {
  getTotalManageGraph,
  getTotalReturnGraph,
};
