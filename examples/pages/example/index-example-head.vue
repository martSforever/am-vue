<template>
    <div class="index-example-head">
        <h3>Welcome to Am-vue, Am-vue is a component library based on vue2.0, enjoy yourself!</h3>

        <div class="nav">
            <div class="nav-item">
                <am-icon icon="fas-compass"/>
                Introduction
            </div>
            <div class="nav-item">
                <am-icon icon="fas-gift"/>
                Components
            </div>
            <div class="nav-item">
                <am-icon icon="fas-graduation-cap"/>
                Tutorial
            </div>
        </div>
        <div class="nav2">
            <div class="nav-item">
                Language
                <am-icon icon="fas-chevron-down"/>
            </div>
        </div>

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
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 @padding;
        box-shadow: 0px 0px 5px 0px #999;

        .nav {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nav-item {
                padding: 0 12px;
                color: #999;
                height: 100%;
                display: flex;
                align-items: center;
                cursor: pointer;
                border-bottom: solid 2px transparent;

                .am-icon {
                    margin-right: 12px;
                }
                &:hover {
                    color: black;
                    border-bottom: solid 2px black;
                }
            }
        }
        .nav2 {
            .nav;
            .nav-item {
                .am-icon {
                    margin-right: 0;
                    margin-left: 12px;
                }
            }
        }
    }
</style>
