import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const UserAPI = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `users/:id`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the product returned by the API
    return response.data;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/users",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: "users/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  create: async function (user, cancel = false) {
    try {
      const response = await api.request({
        url: `users/`,
        method: "POST",
        data: user,
        signal: cancel
          ? cancelApiObject[this.create.name].handleRequestCancellation().signal
          : undefined,
      });
      return response;
    } catch (error) {
      return error.response.data;
    }
  },
};

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(UserAPI);
