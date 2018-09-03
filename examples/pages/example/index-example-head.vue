<template>
    <div class="index-example-head">
        <span>Welcome to Am-vue</span>
        <a href="https://github.com/martSforever/am-vue" target="_blank">
            <am-icon icon="fab-github" size="30px" color="black"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'index-example-head'
    };
</script>

<style lang="less">
    .index-example-head {
        height: 8vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 @padding;
    }
</style>
