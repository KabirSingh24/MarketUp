import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // Backend URL
});

// Signup
export const signup = (userData) => API.post('/signup', userData);

// Login
export const login = (userData) => API.post('/login', userData);