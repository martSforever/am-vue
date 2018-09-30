<template>
    <am-swiper-item class="am-tab" :order="order" ref="swiperItem">
        <slot></slot>
    </am-swiper-item>
</template>

<script>
    import AmSwiperItem from '../am-swiper/am-swiper-item';
    import {findComponentUpward} from '../../scripts/dom';
    import {uuid} from '../../scripts/utils';

    export default {
        name: 'am-tab',
        props: {
            title: {type: String, required: true},
            order: {
                type: Number,
                default: 0
            },
        },
        components: {
            AmSwiperItem,
        },
        data() {
            return {
                controller: null
            };
        },
        mounted() {
            this.tabId = uuid();
            this.controller = findComponentUpward(this, 'am-tabbar-controller');
            if (!this.controller) {
                console.error('tab should be wrapped by am-tabbar!');
                return;
            }
            this.controller.addTab(this);
        },
    };
</script>
