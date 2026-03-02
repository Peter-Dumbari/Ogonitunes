import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const setBaseURL = (endpoint) => BASE_URL + endpoint;

const axiosInstance = axios.create({
  baseURL: setBaseURL(""),
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default axiosInstance;
