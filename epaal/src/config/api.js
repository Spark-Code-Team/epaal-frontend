import axios from "axios";
import { getCookie } from "../utils/cookie";


const api = axios.create({
    baseURL: process.env.DB_HOST,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    request => {
        const accessToken = getCookie("accessToken")

        if(accessToken) {
            request.headers["Authorization"] = `Bearer ${accessToken}`
        }

        return request
    }, 

    (error) => {
        return Promise.reject(error)
    }
)

export default api;