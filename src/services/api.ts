import axios from 'axios'

// serve para auxiliar no acesso de pai
const api = axios.create({
    baseURL: 'https://app-joffy.herokuapp.com/',
});

export default api;

