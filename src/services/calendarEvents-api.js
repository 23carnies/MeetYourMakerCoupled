import tokenService from '../services/tokenService';
const BASE_URL = '/api/calendarEvents/';

export function create(calendarEvent) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(calendarEvent)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAllEvents() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
  }


