import tokenService from '../services/tokenService';
const BASE_URL = '/api/products/';

export function create(product) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(product)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
  }

  export function deleteOne(p_id, s_id) {
    console.log(p_id, s_id)
    return fetch(`${BASE_URL}${s_id}/${p_id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
  }

export function update(product) {
    return fetch(`${BASE_URL}${product._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(product)
    }, {mode: "cors"})
    .then(res => res.json());
  }