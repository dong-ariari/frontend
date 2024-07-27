import axios from "axios";

const api = axios.create({
  baseURL: "http://34.64.150.30",
  //   baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default api;
