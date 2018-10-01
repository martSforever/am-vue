<template>
    <div class="am-scrollbar" ref="host">
        <div class="am-scrollbar-content-wrapper" @scroll="_handleScroll" ref="wrapper">
            <div class="am-scrollbar-content" ref="content">
                <span>contentWidth：{{contentWidth}}，contentHeight:{{contentHeight}}</span>
                <span>hostWidth：{{hostWidth}}，hostHeight:{{hostHeight}}</span>
                <span>indicatorHeight:{{indicatorHeight}}</span>
                <span>indicatorTop:{{indicatorTop}}</span>
                <slot></slot>
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

    export default {
        name: "am-scrollbar",
        props: {
            scrollbarSize: {type: Number, default: 9},
            scrollbarColor: {type: String, default: '#ddd'},
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
        },
        beforeDestroy() {
            erdUltraFast.removeListener(this.$refs.content, this._contentResize);
            erdUltraFast.removeListener(this.$refs.host, this._hostResize);
        },
    }
</script>
