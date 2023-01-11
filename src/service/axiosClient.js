import axios from "axios";
import { stringify, parse } from "qs";
export const API_ENDPOINT = "http://45.76.145.5:3005";

 const AxiosClient = axios.create({
    baseURL: API_ENDPOINT,
    responseType: "json",
    timeout: 50000,
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
    },
});


AxiosClient.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosClient;