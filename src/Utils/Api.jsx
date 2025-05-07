import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6393',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    console.log('Token being sent:', token);
  } else {
    console.warn('No JWT found in localStorage!');
  }
  return config;
}, (error) => {
  console.error('Request error:', error);
  return Promise.reject(error);
});

export default api;
