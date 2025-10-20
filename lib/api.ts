import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Determine base URL for API requests
const getBaseUrl = () => {
  const envBase = process.env.API_BASE_URL;
  if (envBase) return envBase;
  return "/api";
};

// Create Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Normalize error shape
    const normalized = {
      message:
        error?.response?.data?.message || error.message || "Unknown error",
      status: error?.response?.status,
      data: error?.response?.data,
    };
    return Promise.reject(normalized);
  }
);

// Helpers
export async function apiGet<T = any>(
  url: string,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.get<T>(url, config);
  return res.data;
}

export async function apiPost<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.post<T>(url, data, config);
  return res.data;
}

export async function apiPut<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.put<T>(url, data, config);
  return res.data;
}

export async function apiDelete<T = any>(
  url: string,
  config?: AxiosRequestConfig
) {
  const res = await apiClient.delete<T>(url, config);
  return res.data;
}

export default apiClient;
