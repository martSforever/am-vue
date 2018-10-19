import {getDefaultGetters, getDefaultMutations} from '../lov.utils';

let state = {
    lovData: null,          //值列表数据
    lovTime: null,          //值列表有效时间
};

const lov = {
    namespaced: true,
    state,
    getters: getDefaultGetters(state),
    mutations: getDefaultMutations(state),
};
export default lov;
