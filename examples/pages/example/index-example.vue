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
        display: flex;
        flex-direction: column;
        .body {
            flex: 1;
            display: flex;
            flex-direction: row;
            .example-wrapper {
                flex: 1;
            }
        }
    }
</style>
