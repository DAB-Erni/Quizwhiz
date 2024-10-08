import axios from 'axios';

const API_URL = 'https://localhost:7173/api/user/';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;