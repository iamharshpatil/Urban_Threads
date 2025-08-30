
import axios from "axios";

const api = axios.create({
  baseURL: "https://urban-threads-kjrr.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
