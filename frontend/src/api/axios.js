import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://scaling-adventure-pj6gq97qqq4p3994p-3000.app.github.dev', // 👈 tu backend real
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;