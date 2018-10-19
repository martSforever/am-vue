import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';

import lov from './sub/store.lov';
import {delay} from '../scripts/utils';

console.log(lov);

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {lov},
    plugins: [
        /*vuex状态管理数据持久化*/
        createPersistedState({
            storage: {
                getItem: key => window.localStorage.getItem(key),
                setItem: (key, value) => window.localStorage.setItem(key, value),
                removeItem: key => window.localStorage.removeItem(key)
            }
        })]
});

export default store;

export function getModuleStore(moduleName) {
    return Vuex.createNamespacedHelpers(moduleName);
}

/*
*  Promise异步获取缓存数据
*/

export async function getStoreSync(gettersKey, dataName) {
    let ret = store.getters[gettersKey];
    let times = 60;
    while (!ret) {
        if (times === 0) {
            console.error(`已经等待${times}s，获取${dataName}失败`);
            return null;
        }
        await delay(1000);
        ret = store.getters[gettersKey];
        times--;
    }
    return ret;
}
