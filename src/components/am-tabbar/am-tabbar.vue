<template>
    <div class="am-tabbar">
        <am-tabbar-head :tabs="tabs" v-model="currentValue" @close="_handleClose" ref="head"/>
        <am-tabbar-controller :tabs="tabs" v-model="currentValue" :swipeable="swipeable" ref="controller">
            <slot></slot>
        </am-tabbar-controller>
    </div>
</template>

<script>

    import AmSwiper from '../am-swiper/am-swiper';
    import AmSwiperItem from '../am-swiper/am-swiper-item';
    import AmTabbarHead from './am-tabbar-head';
    import AmTabbarController from './am-tabbar-controller';
    import RenderingSlot from '../am-render/rendering-slot';

    export default {
        name: 'am-tabbar',
        components: {
            AmTabbarController,
            AmTabbarHead,
            AmSwiper,
            AmSwiperItem,
            RenderingSlot,
        },
        props: {
            value: {type: Number, default: 0},
            swipeable: {type: Boolean, default: false},
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
        methods: {
            _handleClose(tab) {
                this.$refs.controller.$refs.swiper.remove(tab.$refs.swiperItem);
                let tabIndex = this.tabs.indexOf(tab);
                this.tabs.splice(tabIndex, 1);
                this.$refs.head.remove(tabIndex);
                tab.$destroy();
            }
        },
    };
</script>
