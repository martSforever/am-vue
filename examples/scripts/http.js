import axios from 'axios';
import env from '../env/env';

axios.defaults.headers.post['Content-Type'] = 'application/json';
const http = {
    async get(url, param) {
        const {data} = await axios.get(env.ip + '/' + url, param);
        return data;
    },
    async post(url, param = {}) {
        const {data} = await axios.post(env.ip + '/' + url, param);
        return data;
    },
};

export default http;
