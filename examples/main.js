/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import router from './router';

// import Amvue from 'dist/iview.min';
// import 'dist/styles/iview.css';

import Amvue from 'src';
import './styles/index.scss';

Vue.use(Amvue, {IconfontPrefix: 'ali-icon'});
// 开启debug模式
Vue.config.debug = true;

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
