import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(REACT_APP_SERVER_URL + "all");
};

const getUserBoard = () => {
  return axios.get(REACT_APP_SERVER_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(REACT_APP_SERVER_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(REACT_APP_SERVER_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};