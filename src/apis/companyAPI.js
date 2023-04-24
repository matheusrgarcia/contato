import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const CompanyAPI = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `companies/${id}`,
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
      url: "/companies",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },

  remove: async function (id, cancel = false) {
    const response = await api.request({
      url: `companies/${id}`,
      method: "DELETE",
      signal: cancel
        ? cancelApiObject[this.remove.name].handleRequestCancellation().signal
        : undefined,
    });

    return response;
  },

  create: async function (company, cancel = false) {
    try {
      const response = await api.request({
        url: `companies/`,
        method: "POST",
        data: company,
        signal: cancel
          ? cancelApiObject[this.create.name].handleRequestCancellation().signal
          : undefined,
      });
      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  update: async function (company, cancel = false) {
    try {
      const response = await api.request({
        url: `companies/${company.id}`,
        method: "PUT",
        data: company,
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
const cancelApiObject = defineCancelApiObject(CompanyAPI);
