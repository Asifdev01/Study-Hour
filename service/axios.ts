/*************  ✨ Windsurf Command ⭐  *************/
import axios from "axios";

// Use a relative `/api` base path so Next.js can proxy requests in development.
// This avoids CORS by keeping requests same-origin when using the rewrite below.
const baseUrl = "/api";

const service = axios.create({
  baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
    // enable sending cookies when required (toggle as needed)
    withCredentials: false,
});

// Response interceptor to surface backend error messages
service.interceptors.response.use(
  (res) => res,
  (err) => {
    const resp = err.response;
    if (resp && resp.data) {
      const message = resp.data.message || resp.data.error || JSON.stringify(resp.data);
      const error = new Error(message) as Error & { status?: number; data?: any };
      error.status = resp.status;
      error.data = resp.data;
      return Promise.reject(error);
    }
    // Network or CORS errors won't have a response object.
    const netMsg = err.message || 'Network error: failed to fetch';
    const error = new Error(netMsg) as Error & { status?: number };
    error.status = err.status || 0;
    return Promise.reject(error);
  }
);

export const httpGet = async (url: string, config?: object) => {
  const response = await service.get(url, config);
  return response.data;
};

export const httpPost = async (url: string, data: object, config?: object) => {
  const response = await service.post(url, data, config);
  return response.data;
};

export const httpPut = async (url: string, data: object, config?: object) => {
  const response = await service.put(url, data, config);
  return response.data;
};

export const httpDelete = async (url: string, config?: object) => {
  const response = await service.delete(url, config);
  return response.data;
};
/*******  1af740ea-7718-423e-8fc6-49f23875a6cd  *******/