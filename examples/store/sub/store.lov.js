import {getDefaultGetters, getDefaultMutations} from '../lov.utils';

let state = {
    lovData: null,          //值列表数据
    lovTime: null,          //值列表有效时间
};

const lov = {
    namespaced: true,
    state,
    getters: Object.assign(getDefaultGetters(state), {
        lovs(state) {
            return !!state.lovData ? state.lovData.reduce((ret, item) => {
                if (!ret[item.type]) ret[item.type] = []
                ret[item.type].push(item)
                return ret
            }, {}) : []
        }
    }),
    mutations: getDefaultMutations(state),
};
export default lov;
