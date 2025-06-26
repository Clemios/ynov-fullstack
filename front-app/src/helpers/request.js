import axios from 'axios';

export const axiosRequests = axios.create({
  baseURL: process.env.API_PROXY_BASE_URL || 'http://localhost:5000',
  timeout: 20000,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
})

axiosRequests.interceptors.response.use(
    function (response) {
        return response
    }
    // check inteceptors new syntax
)
