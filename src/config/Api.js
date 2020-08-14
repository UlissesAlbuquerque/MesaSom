import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.125.135.106:4000',
    timeout: 5000,
  });

export default api;