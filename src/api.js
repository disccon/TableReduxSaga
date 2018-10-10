import axios from 'axios';


 const API_URL = 'https://swapi.co/api/people/';

export function getData() {
    return axios.get(`${API_URL}`)
        .then(res => res.data);
}




export function getDataTable(userName) {
    if(typeof userName === "object"){
        userName = userName[0]
    }
    return axios.get(`${userName}`)
        .then(res => res.data)
        .catch(error => {return false})
}


