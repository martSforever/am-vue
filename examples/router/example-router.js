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
            path: '/button',
            name: 'button',
            component: resolve => require(['examples/pages/example/components/button-example.vue'], resolve),
        },
        {
            path: '/input',
            name: 'input',
            component: resolve => require(['examples/pages/example/components/input-example.vue'], resolve),
        },
        {
            path: '/switch',
            name: 'switch',
            component: resolve => require(['examples/pages/example/components/switch-example.vue'], resolve),
        },
        {
            path: '/grid',
            name: 'grid',
            component: resolve => require(['examples/pages/example/components/grid-example.vue'], resolve),
        },
    ]
};
