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
            path: '/number-input',
            name: 'number-input',
            component: resolve => require(['examples/pages/example/components/number-input-example.vue'], resolve),
        },
        {
            path: '/switch',
            name: 'switch',
            component: resolve => require(['examples/pages/example/components/switch-example.vue'], resolve),
        },
        {
            path: '/radio',
            name: 'radio',
            component: resolve => require(['examples/pages/example/components/radio-example.vue'], resolve),
        },
        {
            path: '/modal',
            name: 'modal',
            component: resolve => require(['examples/pages/example/components/modal-example.vue'], resolve),
        },
        {
            path: '/grid',
            name: 'grid',
            component: resolve => require(['examples/pages/example/components/grid-example.vue'], resolve),
        },
        {
            path: '/avatar',
            name: 'avatar',
            component: resolve => require(['examples/pages/example/components/avatar-example.vue'], resolve),
        },
        {
            path: '/move',
            name: 'move',
            component: resolve => require(['examples/pages/example/components/move-example.vue'], resolve),
        },
        {
            path: '/collapse',
            name: 'collapse',
            component: resolve => require(['examples/pages/example/components/collapse-example.vue'], resolve),
        },
        {
            path: '/notice',
            name: 'notice',
            component: resolve => require(['examples/pages/example/components/notice-example.vue'], resolve),
        },
        {
            path: '/tag',
            name: 'tag',
            component: resolve => require(['examples/pages/example/components/tag-example.vue'], resolve),
        },
        {
            path: '/input-area',
            name: 'input-area',
            component: resolve => require(['examples/pages/example/components/input-area-example.vue'], resolve),
        },
    ]
};
