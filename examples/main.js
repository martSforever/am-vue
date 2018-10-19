/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import router from './router';

import Amvue from 'amvue';
// import Amvue from 'src';

import './styles/index.scss';
import './scripts/start';
import store from './store';
import {start} from './scripts/start';

window._ = require('lodash');
Vue.use(Amvue, {IconfontPrefix: 'ali-icon'});
// 开启debug模式
Vue.config.debug = true;

const app = new Vue({
    store,
    router,
    render: h => h(App),
    mounted() {
        start();
    }
}).$mount('#app');
