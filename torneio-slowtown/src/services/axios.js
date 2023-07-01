import axios from 'axios'

const token = localStorage.getItem("token")

export const apiBack = axios.create({
    baseURL: 'http://localhost:8080', 
    timeout: 5000,
});

export const apiBackWithToken = axios.create({
    baseURL: 'http://localhost:8080', 
    timeout: 5000,
    headers: {
        'Authorization': 'Bearer ' + token
    }
});


export const apiAuth = axios.create({
    baseURL: 'http://localhost:8001', 
    timeout: 5000,
});
