<template>
    <div class="am-swiper-item" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentUpward} from '../../scripts/dom';

    export default {
        name: 'am-swiper-item',
        props: {
            order: {
                type: Number,
                default: 0,
            },
        },
        data() {
            return {
                swiper: null,
                left: 0,
                width: 0,
            };
        },
        mounted() {
            this.width = this.$el.offsetWidth;
            this.swiper = findComponentUpward(this, 'am-swiper');
            if (!this.swiper) {
                console.error('siper-item should be wrapped by swiper!');
            }
            this.swiper.addItem(this);
        },
        computed: {
            styles() {
                return {
                    left: `${this.left}px`
                };
            }
        },
    };
</script>
