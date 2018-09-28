<template>
    <div class="swiper-example">
        <div class="wrapper">
            <div>
                <am-number-input v-model="index1"/>
            </div>
            <am-swiper v-model="index1">
                <am-swiper-item style="background-color: #2D8DF0"></am-swiper-item>
                <am-swiper-item style="background-color: #ED4114;width: 200px"></am-swiper-item>
                <am-swiper-item style="background-color: #ffb020"></am-swiper-item>
                <am-swiper-item style="background-color: #ED4114;width: 200px"></am-swiper-item>
                <am-swiper-item style="background-color: #ffb020"></am-swiper-item>
            </am-swiper>
            <div>index1：{{index1}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'swiper-example',
        data() {
            return {
                index1: 1
            };
        },
    };
</script>

<style lang="scss">
    .swiper-example {
        height: 100%;
        .wrapper {
            width: 100%;
            height: 300px;
        }
    }
</style>
