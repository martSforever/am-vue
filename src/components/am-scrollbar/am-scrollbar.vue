<template>
    <div class="am-scrollbar"
         ref="host"
         :class="{'am-scrollbar-hover':true}"
         @mouseenter="_mouseenter"
         @mouseleave="_mouseleave"
    >
        <div class="am-scrollbar-content-wrapper"
             @scroll="_handleScroll"
             :style="wrapperStyles"
             ref="wrapper">
            <div class="am-scrollbar-content" ref="content" :style="contentStyles">
                <slot></slot>
            </div>
        </div>
        <div class="am-scrollbar-vertical-indicator-wrapper" v-if="!!scrollY">
            <div ref="verticalIndicator"
                 class="am-scrollbar-vertical-indicator"
                 :style="verticalIndicatorStyles"
                 @mousedown="vIndicatorDragStart"></div>
        </div>
        <div class="am-scrollbar-horizontal-indicator-wrapper" v-if="!!scrollX">
            <div ref="horizontalIndicator" class="am-scrollbar-horizontal-indicator"
                 :style="horizontalIndicatorStyles"
                 @mousedown="hIndicatorDragStart"></div>
        </div>
    </div>
</template>

<script>
    import {addClass, removeClass} from '../../scripts/dom';

    const scroll = require('scroll');
    const elementResizeDetectorMaker = require('element-resize-detector');
    let erdUltraFast = elementResizeDetectorMaker({strategy: 'scroll'});

    export default {
        name: 'am-scrollbar',
        props: {
            scrollbarSize: {type: Number, default: 9},
            scrollbarColor: {type: String, default: 'rgba(0,0,0,0.4)'},
            scrollX: {type: Boolean, default: true},
            scrollY: {type: Boolean, default: true},
        },
        data() {
            return {
                contentWrapperScrollTop: 0,
                contentWrapperScrollLeft: 0,
                contentWidth: 0,
                contentHeight: 0,
                hostWidth: 0,
                hostHeight: 0,

                dragStartTop: 0,
                dragStartY: 0,
                dragStartLeft: 0,
                dragStartX: 0,
                hover: false,
            };
        },
        mounted() {
            erdUltraFast.listenTo(this.$refs.content, this._contentResize);
            erdUltraFast.listenTo(this.$refs.host, this._hostResize);
        },
        computed: {
            indicatorHeight() {
                return (this.contentHeight > this.hostHeight + 1) ? this.hostHeight * this.hostHeight / this.contentHeight : 0;
            },
            indicatorTop() {
                return (this.hostHeight - this.indicatorHeight) * this.contentWrapperScrollTop / (this.contentHeight - this.hostHeight);
            },
            indicatorWidth() {
                return (this.contentWidth > this.hostWidth + 1) ? this.hostWidth * this.hostWidth / this.contentWidth : 0;
            },
            indicatorLeft() {
                return (this.hostWidth - this.indicatorWidth) * this.contentWrapperScrollLeft / (this.contentWidth - this.hostWidth);
            },
            verticalIndicatorStyles() {
                return {
                    height: `${this.indicatorHeight}px`,
                    width: `${this.scrollbarSize}px`,
                    top: `${this.indicatorTop}px`,
                    backgroundColor: this.scrollbarColor,
                };
            },
            horizontalIndicatorStyles() {
                return {
                    height: `${this.scrollbarSize}px`,
                    width: `${this.indicatorWidth}px`,
                    left: `${this.indicatorLeft}px`,
                    backgroundColor: this.scrollbarColor,
                };
            },
            contentStyles() {
                let styles = {};
                if (!this.scrollX) styles.width = `${this.contentWidth}px`;
                if (!this.scrollY) styles.height = `${this.contentHeight}px`;
                return styles;
            },
            wrapperStyles() {
                let styles = {};
                if (!this.scrollX) {
                    styles.overflowX = 'hidden';
                    styles.height = '100%';
                }
                if (!this.scrollY) {
                    styles.overflowY = 'hidden';
                    styles.width = '100%';
                }
                return styles;
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
                this.contentWrapperScrollTop = e.target.scrollTop;
                this.contentWrapperScrollLeft = e.target.scrollLeft;
                this.$emit('scroll', e);
                if (this.contentWrapperScrollTop === (this.contentHeight - this.hostHeight)) this.$emit('vertical-scroll-bottom');
                if (this.contentWrapperScrollTop === 0) this.$emit('vertical-scroll-top');
            },
            vIndicatorDragStart(e) {
                this.dragStartTop = this.indicatorTop;
                this.dragStartY = e.clientY;
                document.addEventListener('mousemove', this.vIndicatorDragMove);
                document.addEventListener('mouseup', this.vIndicatorDragEnd);
                addClass(document.body, 'am-body-user-select-none');
            },
            vIndicatorDragMove(e) {
                let deltaY = e.clientY - this.dragStartY;
                const targetTop = this.dragStartTop + deltaY;
                this.$refs.wrapper.scrollTop = `${targetTop * (this.contentHeight - this.hostHeight) / (this.hostHeight - this.indicatorHeight)}`;
            },
            vIndicatorDragEnd(e) {
                document.removeEventListener('mousemove', this.vIndicatorDragMove);
                document.removeEventListener('mouseup', this.vIndicatorDragEnd);
                document.body.style.userSelect = 'unset';
                removeClass(document.body, 'am-body-user-select-none');
            },
            hIndicatorDragStart(e) {
                this.dragStartLeft = this.indicatorLeft;
                this.dragStartX = e.clientX;
                document.addEventListener('mousemove', this.hIndicatorDragMove);
                document.addEventListener('mouseup', this.hIndicatorDragEnd);
                addClass(document.body, 'am-body-user-select-none');
            },
            hIndicatorDragMove(e) {
                let deltaX = e.clientX - this.dragStartX;
                const targetLeft = this.dragStartLeft + deltaX;
                this.$refs.wrapper.scrollLeft = `${targetLeft * (this.contentWidth - this.hostWidth) / (this.hostWidth - this.indicatorWidth)}`;
            },
            hIndicatorDragEnd(e) {
                document.removeEventListener('mousemove', this.hIndicatorDragMove);
                document.removeEventListener('mouseup', this.hIndicatorDragEnd);
                removeClass(document.body, 'am-body-user-select-none');
            },
            _mouseenter() {
                this.hover = true;
            },
            _mouseleave() {
                this.hover = false;
            },
            scrollTop(pos = 0, dur = 400, done) {
                scroll.top(this.$refs.wrapper, pos);
            },
            scrollLeft(pos = 0, dur = 400, done) {
                scroll.left(this.$refs.wrapper, pos);
            },
            scrollTo({x, y}) {
                x != null && (this.scrollLeft(x));
                y != null && (this.scrollTop(y));
            },
        },
        beforeDestroy() {
            erdUltraFast.removeListener(this.$refs.content, this._contentResize);
            erdUltraFast.removeListener(this.$refs.host, this._hostResize);
        },
    };
</script>
