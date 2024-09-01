import { Axios } from "axios";

import { apiURL, apiTimeout } from "../constants/api";

export const Api = new Axios({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: apiTimeout
});
