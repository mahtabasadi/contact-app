import http from "./HttpServises";


export default function addOneContacts(data) {
    return http.post(`/contacts`,data)
}