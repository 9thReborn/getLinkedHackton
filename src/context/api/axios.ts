import axios from 'axios'

const baseUrl = "https://backend.getlinked.ai";

export const apiGet = (path: string) => {
    return axios.get(`${baseUrl}${path}`)
}

export const apiPost = (path: string, data:any) => {
    return axios.post(`${baseUrl}${path}`, data)
}