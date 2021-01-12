import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { _API_BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: `${_API_BASE_URL}`,
});

export default {
  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosInstance.get(url, config);
  },
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axiosInstance.delete<T>(url, config);
  },
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axiosInstance.post<T>(url, data, config);
  },
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return axiosInstance.put<T>(url, data, config);
  },
};
