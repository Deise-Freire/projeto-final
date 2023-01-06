import axios from 'axios';
import { getToken } from './utils';

export const api = axios.create({
  //baseURL: 'http://localhost:8000', 
  baseURL: 'http://kalitadeise.vercel.app/'
});

api.interceptors.request.use(function (config) {
  const token = getToken();
  config.headers.Authorization = token ? `Token ${token}` : null;

  return config;
});

//import axios from 'axios';

//const instance = axios.create({
//  baseURL: process.env.NODE_ENV === 'development'
//  ? 'http://localhost:3333' : 'https://api.producao.com'
//});

//export default instance;
