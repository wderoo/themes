import axios from "axios";

export const api = axios.create({
  baseURL: "/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});
