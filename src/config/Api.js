import axios from 'axios'

// Endereço do Servidor | Arduino
const api = axios.create({
    baseURL: 'http://10.125.135.106:4000',
    timeout: 5000,
  });

export default api;