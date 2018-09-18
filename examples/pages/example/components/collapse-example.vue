<template>
    <div class="collapse-example example-page">
        <div class="title">普通用法</div>
        <div class="example-row">
            <am-button label="toggle" @click="val1 = !val1"/>
        </div>
        <div class="example-row" style="width: 500px">
            <am-collapse v-model="val1" icon-color="white">
                <div slot="head"
                     style="background-color: blueviolet;height: 44px;line-height: 44px;padding: 0 1em;color: white">
                    this is head
                </div>
                <div style="background-color: salmon;height: 300px">
                    this is content
                </div>
            </am-collapse>
        </div>
        <div class="title">折叠动画不会影响原来容器的宽高</div>
        <div class="example-row">
            <div class="example-row">
                <am-button label="toggle" @click="val2 = !val2"/>
                <am-button label="add" @click="list.push(list.length)"/>
                <am-button label="remove" @click="list.pop()"/>
            </div>
        </div>
        <div class="example-row" style="width: 500px">
            <am-collapse v-model="val2" icon-color="white">
                <div slot="head"
                     style="background-color: blueviolet;height: 44px;line-height: 44px;padding: 0 1em;color: white">
                    this is head
                </div>
                <div style="background-color: salmon">
                    <div class="test-collapse-item"
                         v-for="item in list">
                        {{item}}
                    </div>
                </div>
            </am-collapse>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'collapse-example',
        data() {
            return {
                val1: false,
                val2: false,
                list: [1, 2, 3, 4],
            };
        },
    };
</script>

<style lang="scss">
    .test-collapse-item {
        height: 50px;
        width: 100%;
        background-color: blueviolet;
        color: white;
        display: block;
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }
</style>
