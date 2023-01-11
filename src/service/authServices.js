import AxiosClient from "./axiosClient";
const API_ENDPOINT = "recognition";

export const getUsers = (params) => {
    return AxiosClient.get(`${API_ENDPOINT}/user` ,{
        params : params
    });
}

export const getInfo = (params) => {
    return AxiosClient.get(`${API_ENDPOINT}/info` , {
        params : params
    });
}

