import {
    // get graph data
    GET_GRAPH_DATA_IN_PROGRESS,
    GET_GRAPH_DATA_SUCCESS,
    GET_GRAPH_DATA_FAILED,
  } from "constants/action";
  import axios from "axios";
  import { REACT_APP_SERVER_URL } from "server/server";
  
  export const getPieGraphData = () => {
      return async (dispatch) => {
        // dispatch(getUserDataInProgress());
        try {
          const res = await axios.post(REACT_APP_SERVER_URL + "Performance/GetTotalMangedAssetGraph", {
            userID: "Rooma5",
            accountno:"All"
          });
          console.log(res);
          dispatch(getUserDataInProgress(res.data.netValue));
          // localStorage.setItem("TMAgraph", JSON.stringify(res.data.netValue));
          dispatch(getUserDataSuccessful(res.data.netValue));
          // localStorage.setItem("otherData", JSON.stringify(res.data.netValue));
          // console.log(res.data.netValue);
        } catch (err) {
          dispatch(getUserDataError(err));
          console.error(err);
        }
      };
    };
    const getUserDataInProgress = () => {
      return {
        type: GET_GRAPH_DATA_IN_PROGRESS,
        payload: {},
      };
    };
    const getUserDataSuccessful = (totalManageGraph) => {
      return {
        type: GET_GRAPH_DATA_SUCCESS,
        payload: {
          totalManageGraph,
        },
      };
    };
    const getUserDataError = (error) => {
      return {
        type: GET_GRAPH_DATA_FAILED,
        payload: {
          error,
        },
      };
    };
  
    export default getPieGraphData;