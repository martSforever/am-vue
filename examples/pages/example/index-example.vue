<template>
    <div class="index-example">
        <index-example-head/>
        <div class="body">
            <index-example-nav-menu/>
            <div class="example-wrapper">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import IndexExampleHead from './index-example-head';
    import IndexExampleNavMenu from './index-example-nav-menu';

    export default {
        name: 'index-example',
        components: {IndexExampleNavMenu, IndexExampleHead}
    };
</script>

<style lang="less">
    .index-example {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        .body {
            height: 94vh;
            display: flex;
            flex-direction: row;
            .example-wrapper {
                flex: 1;
            }
        }
    }
</style>
