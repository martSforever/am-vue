<template>
    <div class="collapse-example example-page">
        <div class="title">普通用法</div>
        <div class="example-row">
            <am-button label="toggle" @click="val1 = !val1"/>
            <am-button label="add" @click="list.push(list.length)"/>
            <am-button label="remove" @click="list.pop()"/>
            <am-collapse v-model="val1">
                <div class="test-collapse-item"
                     v-for="item in list">
                    {{item}}
                </div>
            </am-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-example",
        data() {
            return {
                val1: true,
                list: [1, 2, 3, 4],
            }
        },
    }
</script>

<style lang="scss">
    .test-collapse-item {
        height: 50px;
        width: 600px;
        background-color: blueviolet;
        color: white;
        display: block;
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }
</style>
