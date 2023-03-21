import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: window.location.protocol + "//" + window.location.host ,
});

export default api;