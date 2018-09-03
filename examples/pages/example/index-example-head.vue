<template>
    <div class="index-example-head">
        <h3>Welcome to Am-vue, Am-vue is a component library based on vue2.0, enjoy yourself!</h3>
        <div>
            <a href="https://github.com/martSforever/am-vue/issues" target="_blank"
               style="text-decoration: none;margin-right: 12px">
                <am-icon icon="fas-question" size="25px"/>
            </a>
            <a href="https://github.com/martSforever/am-vue" target="_blank">
                <am-icon icon="fab-github" size="30px" color="black"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index-example-head'
    };
</script>

<style lang="less">
    .index-example-head {
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 @padding;
        box-shadow: 0px 0px 5px 0px #999;
    }
</style>
