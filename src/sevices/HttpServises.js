import axios from "axios";

axios.defaults.baseURL = " http://localhost:3001";

const http = {
  delete: axios.delete,
  get: axios.get,
  put: axios.put,
  post: axios.post,
};

export default http;
