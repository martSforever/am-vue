<template>
    <div class="am-tabbar">
        <am-tabbar-controller :tabs="tabs">
            <slot></slot>
        </am-tabbar-controller>
        <am-tabbar-head :tabs="tabs" v-model="currentValue"></am-tabbar-head>
        <am-swiper
            v-model="currentValue"
            class="am-tabbar-content"
            style="background-color: #f2f2f2">
        </am-swiper>
    </div>
</template>

<script>

    import AmSwiper from '../am-swiper/am-swiper';
    import AmTabbarHead from './am-tabbar-head';
    import AmTabbarController from './am-tabbar-controller';

    export default {
        name: 'am-tabbar',
        components: {
            AmTabbarController,
            AmTabbarHead,
            AmSwiper,
        },
        props: {
            value: {type: Number, default: 0},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                currentValue: this.value,
                tabs: []
            };
        },

    };
</script>
