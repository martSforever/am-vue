/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import Amvue from 'src';
import router from './router';
import './styles/index.less';

Vue.use(Amvue, {ComponentPrefix: 'am', IconfontPrefix: 'ali-icon'});
// 开启debug模式
Vue.config.debug = true;

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
