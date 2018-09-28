<template>
    <div class="am-tabbar">
        <am-tabbar-head></am-tabbar-head>
        <am-swiper class="am-tabbar-content">
            <slot></slot>
        </am-swiper>
    </div>
</template>

<script>

    import AmSwiper from '../am-swiper/am-swiper';
    import AmTabbarHead from './am-tabbar-head';

    export default {
        name: 'am-tabbar',
        components: {
            AmTabbarHead,
            AmSwiper,
        },
        props: {
            value: {},
        },
        data() {
            return {
                currentValue: this.value
            };
        },

    };
</script>
