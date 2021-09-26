import axios from "axios";

const toolboxApi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default toolboxApi;
