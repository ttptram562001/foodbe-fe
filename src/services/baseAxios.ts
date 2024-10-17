import axios, {AxiosRequestConfig} from "axios";
import {store} from "../redux";


const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL
}
const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.getState().common.info?.accessToken}`
    return config
})
axiosInstance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return error.response.data
    })

export default axiosInstance