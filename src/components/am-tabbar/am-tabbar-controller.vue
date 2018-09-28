<template>
    <div class="am-tabbar-controller">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-tabbar-controller',
        props: {
            tabs: {
                type: Array,
            }
        },
        data() {
            return {};
        },
        methods: {
            addTab(tab) {
                this.tabs.push(tab);
                console.log(tab.$slots.default)
            },
        },
    };
</script>
