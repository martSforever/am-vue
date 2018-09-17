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

<style lang="scss">
    .index-example {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        .body {
            position: absolute;
            top: 64px;
            bottom: 0;
            left: 0;
            right: 0;
            .example-wrapper {
                position: absolute;
                top: 0;
                left: 220px;
                bottom: 0;
                right: 0;
            }
        }
    }
</style>
