import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // or your API URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any request configuration here
    // For example, add an authorization token
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    console.error('API call error:', error);

    // Optionally, you can handle specific status codes
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized error (e.g., redirect to login)
          break;
        case 403:
          // Handle forbidden error
          break;
        case 404:
          // Handle not found error
          break;
        // Add more cases as needed
        default:
          // Handle other errors
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
