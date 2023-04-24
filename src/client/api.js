import axios from "axios";

const apiClient = axios.create({
  baseURL: "localhost:4000",
});

export default apiClient;
