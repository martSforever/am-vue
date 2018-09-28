<template>
    <div class="am-swiper">
        <div class="am-swiper-container" @mousedown="_touchStart" :style="containerStyles" ref="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'am-swiper',
        props: {
            swipeable: {type: Boolean, default: true},
            value: {type: Number, default: 0},
        },
        watch: {
            value(val) {
                if (val < this.items.length && val > -1 && this.currentValue !== val) {
                    this.currentValue = val;
                    this.translateX = -this.items[this.currentValue].left;
                }
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                items: [],
                touch: {},
                translateX: null,
                totalWidth: 0,
                containerWidth: null,

                currentValue: null,
            };
        },
        methods: {
            addItem(item) {
                item.left = this.items.reduce((ret, item) => {
                    ret += item.width;
                    return ret;
                }, 0);
                this.totalWidth += item.width;
                this.items.push(item);

                let length = this.items.length;
                if (!this.currentValue && length > 0 && length - 1 === this.value) {
                    this.currentValue = this.value;
                    this.translateX = -this.items[this.value].left;
                }
            },

            _touchStart(e) {
                if (!this.swipeable) return;
                this.touch.initialized = true;
                this.currentTranslateX = this.translateX;
                this.touch.startX = e.clientX;
                this.touch.startY = e.clientY;
            },
            _touchmove(e) {
                if (!this.swipeable) return;
                if (!this.touch.initialized) return;
                let deltaX = e.clientX - this.touch.startX;
                this.translateX = deltaX + this.currentTranslateX;
            },
            _touchend(e) {
                if (!(this.swipeable === true || this.swipeable === 'Y')) return;
                if (!this.touch.initialized) return;
                this.touch.initialized = false;
                if (this.translateX > 0) {
                    this.translateX = 0;
                    this.touch.currentTranslateX = this.translateX;
                    this.currentValue = 0;
                }
                let absX = -this.translateX;
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    if (item.left < absX && absX < item.left + item.width) {
                        absX = absX < item.left + (item.width / 2) ? item.left : (item.left + item.width);
                        this.currentValue = absX < item.left + (item.width / 2) ? i : i + 1;
                    }
                }
                absX = Math.min(this.totalWidth - this.containerWidth, absX);
                this.translateX = -absX;
            },

        },
        computed: {
            containerStyles() {
                return {
                    transition: !!this.touch.initialized ? null : 'all 1s  cubic-bezier(.28, 1.03, 0, .99)',
                    userSelect: !!this.swipeable ? 'none' : 'auto',
                    transform: `translateX(${this.translateX}px)`
                };
            }
        },
        mounted() {
            this.containerWidth = this.$refs.container.offsetWidth;
            document.addEventListener('mousemove', this._touchmove);
            document.addEventListener('mouseup', this._touchend);
        },
        beforeDestroy() {
            document.removeEventListener('mousemove', this._touchmove);
            document.removeEventListener('mouseup', this._touchend);
        },
    };
</script>
