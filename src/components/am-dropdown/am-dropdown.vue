<template>
    <div class="am-dropdown">
        <div class="am-dropdown-reference-wrapper"
             @click="_handleClickReference"
             @mouseenter="referenceHover=true"
             @mouseleave="_handleHover('referenceHover',false,'referenceTimer')"
             ref="reference">
            <slot name="reference"></slot>
        </div>
        <am-popover :value="show"
                    reference-name="reference"
                    parent-name="am-dropdown"
                    :show-arrow="showArrow"
                    :size-equal="sizeEqual"
                    :hide-on-click-outside="hideOnClickOutside"
                    :arrow-size="arrowSize"
                    :direction="direction"
                    :align="align"
                    :shadow="shadow"
                    :border-radius="borderRadius"

                    @mouseenter.native="popoverHover=true"
                    @mouseleave.native="_handleHover('popoverHover',false,'popoverTimer')"
                    @input="val=> currentValue = val"
        >
            <div class="am-dropdown-popover-wrapper">
                <slot name="popover"></slot>
            </div>
        </am-popover>
    </div>
</template>

<script>
    import AmPopover from '../am-popover'
    import {oneOf} from "../../scripts/utils";

    export default {
        name: "am-dropdown",
        props: {
            value: {type: Boolean, default: false},
            trigger: {
                type: String,
                default: 'click',
                validator(val) {
                    return oneOf(val, ['click', 'hover'])
                },
            },
            disabled: {type: Boolean, default: false},

            showArrow: {
                type: Boolean,
                default: true
            },
            sizeEqual: {
                type: Boolean,
                default: false,
                desc: '是否令popper与reference在方向上宽度一致'
            },
            hideOnClickOutside: {
                type: Boolean,
                default: true,
                desc: '是否在点击popover外部元素的时候，关闭popover'
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
        },
        components: {
            AmPopover
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                currentValue: this.value,
                referenceHover: false,
                popoverHover: false,
                referenceTimer: null,
                popoverTimer: null,
            }
        },
        methods: {
            _handleClickReference() {
                this.trigger === 'click' && !this.disabled && (this.currentValue = !this.currentValue)
            },
            _handleHover(target, val, timerName) {
                if (!!this.disabled) return
                if (!!this[timerName]) {
                    clearTimeout(this[timerName])
                    this[timerName] = null
                }
                this[timerName] = setTimeout(() => this[target] = val, 150)
            },
        },
        computed: {
            show() {
                return this.trigger === 'click' ?
                    this.currentValue : (this.referenceHover || this.popoverHover)
            },
        },
    }
</script>