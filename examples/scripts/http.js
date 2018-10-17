import axios from 'axios'
import env from '../env/env'
axios.defaults.headers.post['Content-Type'] = 'application/json';
const http = {
    async get(url, param) {
        return axios.get(env.ip + "/" + url, param)
    },
    async post(url, param) {
        return axios.post(env.ip + "/" + url, param)
    },
}

export default http
