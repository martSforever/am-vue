<template>
    <div class="am-popover">
        <transition name="am-popover-scale">
            <div class="am-popover-content-wrapper"
                 :class="popperWrapperClasses"
                 v-show="currentValue"
            >
                <div class="am-popover-arrow" :style="arrowStyles" v-if="showArrow"></div>
                <div class="am-popover-content" ref="popperContent" :style="popoverContentStyles">
                    <slot></slot>
                </div>
                <div class="am-popover-shadow" :style="popoverShadowStyles"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Popper from 'popper.js'
    import {oneOf} from "../../scripts/utils";
    import {findComponentUpward} from "../../scripts/dom";

    export default {
        name: "am-popover",
        props: {
            value: {type: Boolean, default: false},
            referenceName: {type: String, required: true, desc: '要引用的对象的ref的名称',},
            parentName: {
                type: String,
                required: true,
                desc: '父引用组件名，因为reference是从父引用组件的$refs中寻找的，所以而popper不一定在父引用组件的根节点下，所以这里需要指定父引用节点名称',
            },
            arrowSize: {type: Number, default: 9, desc: '小三角大小，默认单位为px',},
            direction: {
                type: String, default: 'bottom', desc: '位置，有四种选择：上下左右', validator(val) {
                    return oneOf(val, ['top', 'bottom', 'left', 'right'])
                },
            },
            align: {
                type: String,
                default: 'start',
                desc: '对其方式，如果direction是上或者下，那对其方式start、center、end对应为左对齐，居中对其以及右对齐，反之为顶部对其、居中对其以及底部对其',
                validator(val) {
                    return oneOf(val, ['start', 'center', 'end'])
                },
            },
            shadow: {
                type: String,
                default: '0px 0px 20px #ddd',
                desc: '阴影',
            },
            borderRadius: {
                type: String,
                default: '4px',
                desc: '边框圆角'
            },
            hideOnClickOutside: {
                type: Boolean,
                default: true,
                desc: '是否在点击popover外部元素的时候，关闭popover'
            },
            sizeEqual: {
                type: Boolean,
                default: false,
                desc: '是否令popper与reference在方向上宽度一致'
            },
            showArrow: {
                type: Boolean,
                default: true
            },
            backgroundColor: {
                type: String,
                default: 'white'
            },
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) {
                    this.currentValue = val
                    if (!!this.currentValue) {
                        this.update()
                        this.$nextTick(() => this._getPopperSize())
                    }
                }
            },
            currentValue(val) {
                this.$emit('input', val)
            },
            direction(val) {
                if (this.currentDirection !== val) {
                    this.currentDirection = val
                    !!this.popper && this.popper.destroy()
                    this.popper = null
                    !!this.currentValue && this.update()
                }
            },
            align(val) {
                if (this.currentAlign !== val) {
                    this.currentAlign = val
                    !!this.popper && this.popper.destroy()
                    this.popper = null
                    !!this.currentValue && this.update()
                }
            },
            currentDirection(val) {
                this.$emit('update:direction', val)
            },
            currentAlign(val) {
                this.$emit('update:align', val)
            },
        },
        data() {
            return {
                currentValue: this.value,
                isMounted: false,
                popper: null,
                reference: null,
                currentDirection: this.direction,
                currentAlign: this.align,
                referenceWidth: null,
                referenceHeight: null,
                popperHeight: 0,
                popperWidth: 0,
                hasPopperSize: false,
                arrowDirectionMap: {
                    top: 'bottom',
                    bottom: 'top',
                    left: 'right',
                    right: 'left',
                },
            }
        },
        computed: {
            equalSizeData() {
                return oneOf(this.currentDirection, ['top', 'bottom']) ?
                    {key: 'width', val: this.referenceWidth} : {key: 'height', val: this.referenceHeight}
            },
            arrowStyles() {
                let styles = {
                    width: `${this.arrowSize}px`,
                    height: `${this.arrowSize}px`,
                    transform: 'rotate(45deg)',
                }
                !!this.backgroundColor && (styles.backgroundColor = this.backgroundColor)
                !!this.shadow && (styles.boxShadow = this.shadow)

                styles[this.arrowDirectionMap[this.currentDirection]] = `${-this.arrowSize / 2}px`
                let align = this.arrowAlign

                !!align && (styles[align.key] = align.value)
                return styles
            },
            popoverContentStyles() {
                let styles = {}
                !!this.backgroundColor && (styles.backgroundColor = this.backgroundColor)
                if (!!this.sizeEqual && !!this.equalSizeData) {
                    ((styles[this.equalSizeData.key] = `${this.equalSizeData.val}px`))
                }
                !!this.borderRadius && (styles.borderRadius = this.borderRadius)
                return styles
            },
            popperWrapperClasses() {
                return `am-scale-origin-${this.currentDirection}-${this.currentAlign}`
            },
            popoverShadowStyles() {
                return {
                    boxShadow: this.shadow,
                    borderRadius: this.borderRadius
                }
            },
            arrowAlign() {
                if (this.isMounted) {
                    if (oneOf(this.currentDirection, ['top', 'bottom'])) {
                        return {
                            key: this.currentAlign === 'end' ? 'right' : 'left',
                            value: this.currentAlign === 'center' ? `${(this.popperWidth - (this.arrowSize * Math.sqrt(2))) / 2}px` : `${this.arrowSize}px`
                        }
                    } else {
                        return {
                            key: this.currentAlign === 'end' ? 'bottom' : 'top',
                            value: this.currentAlign === 'center' ? `${(this.popperHeight - (this.arrowSize * Math.sqrt(2))) / 2}px` : `${this.arrowSize}px`
                        }
                    }
                } else {
                    return null
                }
            },
        },
        methods: {
            update() {
                if (!!this.popper) {
                    this.popper.update()
                } else {
                    this.popper = new Popper(this.reference, this.$el, {
                        placement: `${this.currentDirection}-${this.currentAlign}`,
                        modifiers: {offset: {offset: `0,${!!this.showArrow ? this.arrowSize : 0}`,}},
                        onUpdate: () => this._refreshArrow(),
                        onCreate: () => this._refreshArrow(),
                    })
                }
            },
            _refreshArrow() {
                let placement = this.popper.popper.getAttribute('x-placement');
                this.currentDirection = placement.split('-')[0];
                this.currentAlign = placement.split('-')[1];
            },
            _handleClickOutside(e) {
                if (!!this.hideOnClickOutside && !this.reference.contains(e.target) && !this.$el.contains(e.target)) {
                    this.currentValue = false
                }
            },
            _getReference() {
                const parent = findComponentUpward(this, this.parentName)
                const referenceTarget = parent.$refs[this.referenceName]
                if (!referenceTarget) {
                    console.error("can't find reference target")
                    return
                }
                return !!referenceTarget.$el ? referenceTarget.$el : referenceTarget
            },
            _getPopperSize() {
                if (!this.hasPopperSize) {
                    this.hasPopperSize = true
                    this.popperHeight = this.$el.offsetHeight
                    this.popperWidth = this.$el.offsetWidth
                }
            },
        },
        mounted() {
            this.isMounted = true
            this.reference = this._getReference()
            this.currentValue && this.update()
            this.referenceWidth = this.reference.offsetWidth
            this.referenceHeight = this.reference.offsetHeight
            document.addEventListener('click', this._handleClickOutside)
        },
        beforeDestroy() {
            document.removeEventListener('click', this._handleClickOutside)
        },
    }
</script>
