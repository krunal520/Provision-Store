// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apiv2stg.promilo.com', // Replace with your API base URL
});

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 errors globally (e.g., redirect to login page, display message)
      // For example, you can redirect to the login page:
      window.location.href = '/login'; // Replace '/login' with your actual login route
    }
    return Promise.reject(error);
  }
);

export const login = (email, password) => {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  formData.append('grant_type', 'password');

  return instance.post('/user/oauth/token', formData);
};

export default instance;
