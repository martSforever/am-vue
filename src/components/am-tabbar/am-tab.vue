<template>
    <am-swiper-item class="am-tab">
        <slot></slot>
    </am-swiper-item>
</template>

<script>
    import AmSwiperItem from '../am-swiper/am-swiper-item';

    export default {
        name: 'am-tab',
        components: {
            AmSwiperItem,
        }
    };
</script>
