import axios from 'axios';



//0729491d07510af312081b42642223068fd903e4 -key

// base url https://api-ssl.bitly.com/v4/

export const key ='0729491d07510af312081b42642223068fd903e4';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Content-type' : 'application/json',
        'Authorization' :`Bearer ${key}`
    }
})

export default api;