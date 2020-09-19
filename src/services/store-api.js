import tokenService from '../services/tokenService';
const BASE_URL = '/api/stores/';

export function create(store) {
    console.log(store)
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(store)
    }, { mode: "cors" })
        .then(res => res.json());
}