<template>
    <div class="swiper-example example-page">
        <div class="example-row">
            <div class="title">基本用法</div>
            <div style="height: 100px;">
                <am-swiper>
                    <am-swiper-item style="background-color: #c1c1c1">item1</am-swiper-item>
                    <am-swiper-item style="background-color: #a3a3a3">item2</am-swiper-item>
                    <am-swiper-item style="background-color: #c1c1c1">item3</am-swiper-item>
                    <am-swiper-item style="background-color: #a3a3a3">item4</am-swiper-item>
                </am-swiper>
            </div>
        </div>

        <div class="example-row">
            <div class="title">使用v-model绑定当前索引</div>
            <div>
                <am-number-input v-model="index1"/>
            </div>
            <div style="height: 100px;">
                <am-swiper v-model="index1">
                    <am-swiper-item style="background-color: #c1c1c1">item1</am-swiper-item>
                    <am-swiper-item style="background-color: #a3a3a3">item2</am-swiper-item>
                    <am-swiper-item style="background-color: #c1c1c1">item3</am-swiper-item>
                    <am-swiper-item style="background-color: #a3a3a3">item4</am-swiper-item>
                </am-swiper>
            </div>
        </div>

        <div class="example-row">
            <div class="title">不同宽度的子元素</div>
            <div style="height: 100px;">
                <am-swiper>
                    <am-swiper-item style="background-color: #c1c1c1;width: 20%">item1</am-swiper-item>
                    <am-swiper-item style="background-color: #a3a3a3;width: 40%">item2</am-swiper-item>
                    <am-swiper-item style="background-color: #c1c1c1;width: 60%">item3</am-swiper-item>
                    <am-swiper-item style="background-color: #a3a3a3;width: 80%">item4</am-swiper-item>
                </am-swiper>
            </div>
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
