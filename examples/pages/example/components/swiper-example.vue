<template>
    <div class="swiper-example">
        <div class="wrapper">
            <am-swiper>
                <am-swiper-item style="background-color: #2D8DF0"></am-swiper-item>
                <am-swiper-item style="background-color: #ED4114;width: 200px"></am-swiper-item>
                <am-swiper-item style="background-color: #ffb020"></am-swiper-item>
            </am-swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'swiper-example'
    };
</script>

<style lang="scss">
    .swiper-example {
        height: 100%;
        .wrapper {
            width: 400px;
            height: 300px;
        }
    }
</style>
