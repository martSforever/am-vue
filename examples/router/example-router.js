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
        {
            path: '/color',
            name: 'color',
            component: resolve => require(['examples/pages/example/components/color-example.vue'], resolve),
        },
        {
            path: '/input',
            name: 'input',
            component: resolve => require(['examples/pages/example/components/input-example.vue'], resolve),
        },
    ]
};
