import http from "./HttpServises";


export default function deleteOneContacts(id) {
    return http.delete(`/contacts/${id}`)
}