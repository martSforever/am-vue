<template>
    <div class="number-input example example-page">
        <div class="title">number
            input基本继承了input的绝大部分属性样式，包括type,color,size,shape,dashed,long,placeholder,disabled,clearable
        </div>
        <am-number-input v-model="val1"/>
        <div class="title">每次增加、缩减大小 dur-num="1000"</div>
        <am-number-input v-model="val1" dur-num="1000"/>
    </div>
</template>

<script>
    export default {
        name: 'number-input-example',
        props: {},
        data() {
            return {
                val1: 0
            };
        },
    };
</script>

<style lang="scss">

</style>
