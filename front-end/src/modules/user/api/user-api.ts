import axios from 'axios';

const USER_API = import.meta.env.VITE_API_BASE_URL;
axios.defaults.baseURL = USER_API;

export const doRegister = (userData: unknown) => {
  return axios.post('/register', userData);
};

export const doLogin = (userData: unknown) => {
  return axios.post('/login', userData);
};