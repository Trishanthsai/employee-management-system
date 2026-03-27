import axios from "axios"
const REST_BASE_URL="http://localhost:8080/employee";
export const  getEmployees=()=>axios.get(REST_BASE_URL);