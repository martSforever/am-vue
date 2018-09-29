<template>
    <am-swiper class="am-tabbar-controller" v-model="currentValue" :swipeable="swipeable" ref="swiper">
        <slot></slot>
    </am-swiper>
</template>

<script>
    import AmSwiper from '../am-swiper/am-swiper';

    export default {
        name: 'am-tabbar-controller',
        components: {AmSwiper},
        props: {
            value: {},
            tabs: {type: Array,},
            swipeable: {},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) {
                    this.currentValue = val;
                }
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                currentValue: this.value
            };
        },
        methods: {
            addTab(tab) {
                this.tabs.push(tab);
                this.tabs.sort((a, b) => a.order - b.order);
            },
        },
    };
</script>
