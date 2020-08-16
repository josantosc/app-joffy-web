import axios from 'axios'

// serve para auxiliar no acesso de pai
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;

