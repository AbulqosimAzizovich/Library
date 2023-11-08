import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7788",
});

export default api;
