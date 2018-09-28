<template>
    <span></span>
</template>

<script>
    import AmSwiperItem from '../am-swiper/am-swiper-item';
    import {findComponentUpward} from '../../scripts/dom';

    export default {
        name: 'am-tab',
        props: {
            title: {type: String, required: true}
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
            this.controller = findComponentUpward(this, 'am-tabbar-controller');
            if (!this.controller) {
                console.error('tab should be wrapped by am-tabbar!');
                return;
            }
            this.controller.addTab(this);
        },
    };
</script>
