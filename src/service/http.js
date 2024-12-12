import axios from 'axios';

const http = axios.create({
    baseURL: 'https://brasilapi.com.br/api/feriados/v1/',
    headers: {
        'Content-type' : 'application/json'
    }
});

export default http;