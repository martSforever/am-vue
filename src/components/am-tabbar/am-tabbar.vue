<template>
    <div class="am-tabbar">
        <am-tabbar-head :tabs="tabs" v-model="currentValue" @close="remove" ref="head"/>
        <am-tabbar-controller :tabs="tabs" v-model="currentValue" :swipeable="swipeable" ref="controller">
            <am-tab v-for="(tab,index) in addTabs" :key="index" :title="tab.title" :order="tab.order">
                <rendering-render-func :render-func="tab.render" :data="tab.context"/>
            </am-tab>
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
    import AmTab from './am-tab';
    import RenderingRenderFunc from '../am-render/rendering-render-func';

    export default {
        name: 'am-tabbar',
        components: {
            AmTab,
            AmTabbarController,
            AmTabbarHead,
            AmSwiper,
            AmSwiperItem,
            RenderingSlot,
            RenderingRenderFunc
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
                tabs: [],
                addTabs: [],
            };
        },
        methods: {
            remove(index) {
                if (this.currentValue === this.tabs.length - 1) this.currentValue = this.tabs.length - 2;
                if (this.currentValue >= index) this.currentValue = Math.max(this.currentValue - 1, 0);
                const tab = this.tabs[index];

                this.$refs.controller.$refs.swiper.remove(tab.$refs.swiperItem);
                let tabIndex = this.tabs.indexOf(tab);
                this.tabs.splice(tabIndex, 1);
                this.$refs.head.remove(tabIndex);
                tab.$destroy();
            },
            add(tab) {
                tab.order = tab.order || this.tabs.length;
                let toIndex = tab.order;
                this.tabs.forEach((tab) => {
                    if (tab.order > toIndex) toIndex = tab.order;
                });
                this.currentValue = toIndex;
                this.addTabs.push(tab);
            },
        },
    };
</script>
