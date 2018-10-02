<template>
    <div class="am-scrollbar"
         ref="host"
         :class="{'am-scrollbar-hover':hover}"
         @mouseenter="_mouseenter"
         @mouseleave="_mouseleave"
    >
        <div class="am-scrollbar-content-wrapper"
             @scroll="_handleScroll"
             ref="wrapper">
            <div class="am-scrollbar-content" ref="content">
                <span>contentWidth：{{contentWidth}}，contentHeight:{{contentHeight}}</span>
                <span>hostWidth：{{hostWidth}}，hostHeight:{{hostHeight}}</span>
                <span>indicatorHeight:{{indicatorHeight}}</span>
                <span>indicatorTop:{{indicatorTop}}</span>
                <slot></slot>
                <am-button @click="scrollTop">scrollTop</am-button>

            </div>
        </div>
        <div class="am-scrollbar-vertical-indicator-wrapper">
            <div class="am-scrollbar-vertical-indicator"
                 :style="verticalIndicatorStyles"
                 @mousedown="vIndicatorDragStart"></div>
        </div>
    </div>
</template>

<script>
    const elementResizeDetectorMaker = require("element-resize-detector");
    let erdUltraFast = elementResizeDetectorMaker({strategy: "scroll"});
    import scrollToWithAnimation from 'scrollto-with-animation'

    export default {
        name: "am-scrollbar",
        props: {
            scrollbarSize: {type: Number, default: 9},
            scrollbarColor: {type: String, default: 'rgba(0,0,0,0.4)'},
        },
        data() {
            return {
                contentWrapperScrollTop: 0,
                contentWidth: 0,
                contentHeight: 0,
                hostWidth: 0,
                hostHeight: 0,

                dragInitialized: false,
                dragStartTop: 0,
                dragStartY: 0,
                hover: false,
            }
        },
        mounted() {
            erdUltraFast.listenTo(this.$refs.content, this._contentResize);
            erdUltraFast.listenTo(this.$refs.host, this._hostResize);
        },
        computed: {
            indicatorHeight() {
                return (this.contentHeight > this.hostHeight) ? this.hostHeight * this.hostHeight / this.contentHeight : 0
            },
            indicatorTop() {
                return (this.hostHeight - this.indicatorHeight) * this.contentWrapperScrollTop / (this.contentHeight - this.hostHeight)
            },
            verticalIndicatorStyles() {
                return {
                    height: `${this.indicatorHeight}px`,
                    width: `${this.scrollbarSize}px`,
                    top: `${this.indicatorTop}px`,
                    backgroundColor: this.scrollbarColor
                }
            },
        },
        methods: {
            _contentResize(el) {
                this.contentWidth = el.offsetWidth;
                this.contentHeight = el.offsetHeight;
            },
            _hostResize(el) {
                this.hostWidth = el.offsetWidth;
                this.hostHeight = el.offsetHeight;
            },
            _handleScroll(e) {
                this.contentWrapperScrollTop = e.target.scrollTop
            },
            vIndicatorDragStart(e) {
                this.dragStartTop = this.indicatorTop
                this.dragStartY = e.clientY
                document.addEventListener('mousemove', this.vIndicatorDragMove)
                document.addEventListener('mouseup', this.vIndicatorDragEnd)
                document.body.style.userSelect = 'none'
            },
            vIndicatorDragMove(e) {
                let deltaY = e.clientY - this.dragStartY
                const targetTop = this.dragStartTop + deltaY
                this.$refs.wrapper.scrollTop = `${targetTop * (this.contentHeight - this.hostHeight) / (this.hostHeight - this.indicatorHeight)}`
            },
            vIndicatorDragEnd(e) {
                document.removeEventListener('mousemove', this.vIndicatorDragMove)
                document.removeEventListener('mouseup', this.vIndicatorDragEnd)
                document.body.style.userSelect = 'unset'
            },
            _mouseenter() {
                this.hover = true
            },
            _mouseleave() {
                this.hover = false
            },
            scrollTop(e, pos = 0, dur = 400, done) {
                scrollToWithAnimation(this.$refs.wrapper, 'scrollTop', pos, dur, 'easeOutQuart', done,);
            },
            scrollLeft(e, pos = 0, dur = 400, done) {
                scrollToWithAnimation(this.$refs.wrapper, 'scrollLeft', pos, dur, 'easeOutQuart', done,);
            },
        },
        beforeDestroy() {
            erdUltraFast.removeListener(this.$refs.content, this._contentResize);
            erdUltraFast.removeListener(this.$refs.host, this._hostResize);
        },
    }
</script>
