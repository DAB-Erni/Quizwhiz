// src/services/auth.service.js
import axios from 'axios';

const API_URL = 'https://localhost:7173/api/user/';

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'login', { userName: username, password: password });
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default { login, logout, getCurrentUser };