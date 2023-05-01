import http from "./HttpServises";


export default function getContacts(id , data) {
    return http.get(`/contacts/${id}`,data)
}