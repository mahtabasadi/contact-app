import http from "./HttpServises";


export default function updateContact(id , data) {
    return http.put(`/contacts/${id}`,data)
}