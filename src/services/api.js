import axios from 'axios';

export const key = '5f70a0a1e8c590ff4d76a4cf67e793b52636ee53';

const api = axios.create({
 baseURL: 'https://api-ssl.bitly.com/v4',
 headers:{
    'Authorization': 'Bearer 5f70a0a1e8c590ff4d76a4cf67e793b52636ee53',
    'Content-Type': 'application/json'
     
     
 }
});

export default api;



