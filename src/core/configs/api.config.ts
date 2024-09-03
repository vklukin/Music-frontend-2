import Axios from "axios";

import { apiURL, apiTimeout } from "../constants/api";

export const Api = Axios.create({
  baseURL: apiURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  responseType: "json",
  timeout: apiTimeout
});
