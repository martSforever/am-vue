import CONST from './const';
import http from './http';
import store, {getStoreSync} from '../store';

/*
*  初始化值列表
*
*  当值列表数据存在，以及值列表有效时间大于当前时间，从缓存中获取值列表，
*  否则请求后台服务器，刷新值列表数据以及刷新值列表有效时间
*/


export async function initializedLov() {
    let lovData, lovTime;
    lovData = store.getters['lov/lovData'];
    lovTime = store.getters['lov/lovTime'];
    if (!!lovData && lovTime > new Date().getTime()) {
        console.info('[缓存] 值列表', lovData);
        return;
    }
    return await loadLov()
}

export async function getLovByType(type) {
    return (await getStoreSync('lov/lovData', '值列表'))[type];
}

export async function loadLov() {
    let data = await http.post('lov/queryAll');
    if (!!data && data.code === 0) {
        const lovData = data.ret;
        store.commit('lov/setLovData', lovData);
        store.commit('lov/setLovTime', new Date().getTime() + CONST.lov_valid_time);
        console.log('[获取] 值列表', lovData);
    } else {
        console.error('值列表初始化失败！');
    }
}
