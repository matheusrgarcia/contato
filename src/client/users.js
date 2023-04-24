import api from "./api";

const getUsers = () => api.get("/users");

export default { getUsers };
