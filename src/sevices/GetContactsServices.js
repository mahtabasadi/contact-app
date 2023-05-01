import http from "./HttpServises";


export default function getContacts() {
    return http.get('/contacts')
}