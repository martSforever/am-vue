<template>
    <pre class="am-highlight" v-text="html">
    </pre>
</template>

<script>
    import highlight from 'highlight.js'; // 引入JS
    import 'highlight.js/styles/monokai-sublime.css'; //样式文件

    highlight.configure({
        tabReplace: '',
        languages: ['html', 'javascript'],
    });

    export default {
        name: 'am-highlight',
        props: {
            html: {},
        },
        watch: {
            html(val) {
                this.update();
            },
        },
        methods: {
            update() {
                highlight.highlightBlock(this.$el);
            },
        },
        mounted() {
            this.update();
        },
        computed: {
            content() {
                return this.html.replace(/\s+/g, ' ');
            },
        },
    };
</script>
<style lang="scss">
    .am-highlight {
        &.hljs {
            display: inline-flex;
        }
    }
</style>
