import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/index/index-page';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: IndexPage
        }
    ]
});
