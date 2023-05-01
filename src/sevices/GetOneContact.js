import http from "./HttpServises";


export default function getOneContacts(id) {
    return http.get(`/contacts/${id}`)
}