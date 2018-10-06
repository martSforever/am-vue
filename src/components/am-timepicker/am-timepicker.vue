<template>
    <div class="am-timepicker">
        <am-input ref="input"
                  @click="!disabled && (currentShow = true)"
                  :suffix-icon="suffixIcon"
                  :value="showValue"
                  :type="type"
                  :color="color"
                  :size="size"
                  :shape="shape"
                  :dashed="dashed"
                  :long="long"
                  :prefixIcon="prefixIcon"
                  :suffixIcon="suffixIcon"
                  :placeholder="placeholder"
                  :disabled="disabled"
        />
        <am-popover
            reference-name="input"
            parent-name="am-timepicker"
            v-model="currentShow"
            window-boundary
            @click-outside="handleClickOutside"
        >
            <div class="am-timepicker-content-wrapper">
                <div class="am-timepicker-spinner-wrapper">
                    <am-time-spinner :num="24" v-model="hour" ref="hourSpinner"/>
                    <am-time-spinner :num="60" v-model="minute" ref="minuteSpinner"/>
                    <am-time-spinner :num="60" v-model="second" ref="secondSpinner"/>
                </div>
                <am-button-group size="small">
                    <am-button color="error" type="none" @click="handleCancel">{{$amlocale.cancelText}}</am-button>
                    <am-button color="success" type="none" @click="handleConfirm">{{$amlocale.confirmText}}</am-button>
                </am-button-group>
            </div>
        </am-popover>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmButtonGroup from '../am-button/am-button-group'
    import AmButton from '../am-button/am-button'
    import AmTimeSpinner from './am-time-spinner'
    import AmPopover from '../am-popover'
    import {zeroize} from "../../scripts/utils";
    import {oneOf} from "../../scripts/utils";

    export default {
        name: "am-timepicker",
        components: {
            AmInput,
            AmButton,
            AmButtonGroup,
            AmTimeSpinner,
            AmPopover,
        },
        props: {
            show: {type: Boolean, default: false},
            value: {type: Date, default: () => new Date()},

            type: {
                type: String,
                default: 'line',
                validator(val) {
                    return oneOf(val, ['fill', 'line', 'none']);
                },
            },
            color: {
                type: String,
                default: 'info',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error', 'none']);
                },
            },
            size: {
                type: String,
                default: 'default',
                validator(val) {
                    return oneOf(val, ['default', 'large', 'small']);
                },
            },
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'round', 'none']);
                },
            },
            dashed: {type: Boolean,},
            long: {type: Boolean,},
            prefixIcon: {type: String},
            suffixIcon: {type: String, default: 'fas-clock'},
            placeholder: {type: String, default: '点击输入内容...'},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            clearable: {type: Boolean},
            regexp: {type: RegExp},
        },
        watch: {
            show(val) {
                if (this.currentShow !== val) this.currentShow = val
            },
            currentShow(val) {
                this.$emit('update:show', val)
                if (!!val) {
                    this.$nextTick(() => {
                        this.$refs.hourSpinner.updatePosition()
                        this.$refs.minuteSpinner.updatePosition()
                        this.$refs.secondSpinner.updatePosition()
                    })
                }
            },
            value(val) {
                this.currentValue = val
            },
            currentValue(val) {
                console.log('currentValue change')
                this.$emit('input', val)
            },
        },
        data() {
            return {
                currentShow: this.show,
                currentValue: this.value,
                hour: this.value.getHours(),
                minute: this.value.getMinutes(),
                second: this.value.getSeconds(),
            }
        },
        computed: {
            showValue() {
                return `${zeroize(this.currentValue.getHours())}:${zeroize(this.currentValue.getMinutes())}:${zeroize(this.currentValue.getSeconds())}`
            },
        },
        methods: {
            handleConfirm() {
                let date = new Date()
                date.setHours(this.hour)
                date.setMinutes(this.minute)
                date.setSeconds(this.second)
                this.currentValue = date
                this.currentShow = false
            },
            handleCancel() {
                this.hour = this.value.getHours()
                this.minute = this.value.getMinutes()
                this.second = this.value.getSeconds()
                this.currentShow = false
            },
            handleClickOutside() {
                this.handleCancel()
            },
        },
    }
</script>
