/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);
// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter();

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
