import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.getAddress.io/',
  responseType: 'json',
});

export default apiClient;