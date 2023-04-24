import axios from "axios";

const apiClient = axios.create({
  // Later read this URL from an environment variable
  baseURL: "localhost:4000",
});

export default apiClient;
