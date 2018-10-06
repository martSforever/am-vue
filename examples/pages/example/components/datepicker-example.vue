<template>
    <div class="datepicker-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-datepicker/>
        </div>
        <div class="title">使用v-model绑定值，只能绑定Date对象，要绑定字符串请自行封装</div>
        <div class="example-row">
            <am-datepicker v-model="date1"/>
            <am-datepicker v-model="date1"/>
        </div>
        <div class="title">
            设置输入框样式，datepicker组件复用了input组件，可以使用input所有属性
        </div>
        <div class="example-row">
            <am-datepicker type="fill" color="primary"/>
        </div>
        <div class="title">
            三种视图
        </div>
        <div class="example-row">
            <am-datepicker view="year"/>
            <am-datepicker view="month"/>
            <am-datepicker view="date"/>
        </div>
        <div class="title">
            还有其他更多特性，敬请期待……
        </div>
    </div>
</template>

<script>
    export default {
        name: "datepicker-example",
        data() {
            return {
                date1: new Date()
            }
        },
    }
</script>

<style lang="scss">

</style>
