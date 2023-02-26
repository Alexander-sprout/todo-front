import axios from "axios";
import { TOKEN_KEY } from "./const";

export const axiosInstance = axios.create({
    baseURL: '/api'
})
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
        config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`
    }
    return config
})