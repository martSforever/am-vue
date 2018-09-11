/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';

import 'src/styles/index.scss'

// 开启debug模式
Vue.config.debug = true;

const app = new Vue({
    render: h => h(App)
}).$mount('#app');
