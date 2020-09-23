import tokenService from '../services/tokenService';
const BASE_URL = '/api/reviews/';

export function create(review, id) {
    return fetch(`${BASE_URL}${id}`, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(review)
    }, { mode: "cors" })
        .then(res => res.json());
}