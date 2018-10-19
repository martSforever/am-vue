import http from './http';

const lov = {
    async init() {
        const data = await http.post('lov/queryAll');
        console.log(data);
    },
};

export default lov;
