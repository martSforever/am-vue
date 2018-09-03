import Vue from 'vue';
import Router from 'vue-router';
import example from './example-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/example'
        },
        example,
    ]
});
