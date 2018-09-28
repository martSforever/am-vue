<template>
    <div class="am-tabbar">
        <am-tabbar-controller :tabs="tabs">
            <slot></slot>
        </am-tabbar-controller>
        <am-tabbar-head :tabs="tabs" v-model="currentValue"></am-tabbar-head>
        <am-swiper
            :swipeable="false"
            v-model="currentValue"
            class="am-tabbar-content"
            style="background-color: #f2f2f2">
            <am-swiper-item
                v-for="(tab,index) in tabs"
                :key="index"
            >
                {{tab.title}}
                <!--<rendering-scope-slot :scope-slot-func="tab.$slots.default"/>-->
            </am-swiper-item>
        </am-swiper>
    </div>
</template>

<script>

    import AmSwiper from '../am-swiper/am-swiper';
    import AmSwiperItem from '../am-swiper/am-swiper-item'
    import AmTabbarHead from './am-tabbar-head';
    import AmTabbarController from './am-tabbar-controller';
    import RenderingScopeSlot from '../am-render/rendering-scope-slot'

    export default {
        name: 'am-tabbar',
        components: {
            AmTabbarController,
            AmTabbarHead,
            AmSwiper,
            AmSwiperItem,
            RenderingScopeSlot,
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
