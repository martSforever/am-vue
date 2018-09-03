export default {
    path: '/example',
    component: resolve => require(['examples/pages/example/index-example.vue'], resolve),
    children: [
        {
            path: '/',
            redirect: '/icon'
        },
        {
            path: '/icon',
            name: 'icon',
            component: resolve => require(['examples/pages/example/components/icon-example.vue'], resolve),
        },
    ]
};
