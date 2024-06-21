import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://localhost:7273/api', 
  withCredentials: false, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});