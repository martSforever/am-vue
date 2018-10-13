<template>
    <div class="am-datepicker">
        <am-input :value="showValue"
                  ref="input"
                  @click="currentShow =true"

                  :suffix-icon="suffixIcon"
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
        <am-popover parent-name="am-datepicker"
                    reference-name="input"
                    @click-outside="handleCancel"
                    window-boundary
                    v-model="currentShow">
            <div class="am-datepicker-content-wrapper">
                <div class="am-datepicker-head">
                    <am-icon icon="fas-angle-double-left" @click="currentYear--"/>
                    <am-icon icon="fas-angle-left" @click="prevMonth"/>
                    <div class="am-datepicker-head-text">
                        <span @click="mode='year'"
                              class="am-datepicker-head-text-item">{{currentYear}}</span><span
                        v-if="hasMonth">-<span
                        @click="mode='month'"
                        class="am-datepicker-head-text-item">{{zeroize(currentMonth+1)}}</span></span><span
                        v-if="hasDate">-<span
                        @click="mode='date'" class="am-datepicker-head-text-item">{{zeroize(currentDate)}}</span>
                    </span>
                    </div>
                    <am-icon icon="fas-angle-right" @click="nextMonth"/>
                    <am-icon icon="fas-angle-double-right" @click="currentYear++"/>
                </div>
                <div class="am-datepicker-panel-wrapper">
                    <am-year-panel v-model="currentYear"
                                   v-show="mode === 'year'"
                                   ref="year"
                                   @click="handlePickYear"/>
                    <am-month-panel v-model="currentMonth"
                                    v-show="mode === 'month'"
                                    @click="handlePickMonth"/>
                    <am-date-panel v-model="currentDate"
                                   :year="currentYear"
                                   :month="currentMonth"
                                   :date="currentDate"
                                   @click="handleClickDate"
                                   v-show="mode === 'date'"/>
                </div>
                <div class="am-datepicker-foot">
                    <am-button-group size="small">
                        <am-button type="none" color="error" @click="handleCancel">{{$amlocale.cancelText}}</am-button>
                        <am-button type="none" color="success" @click="handleConfirm">{{$amlocale.confirmText}}
                        </am-button>
                    </am-button-group>
                </div>
            </div>
        </am-popover>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmYearPanel from "./am-year-panel";
    import AmMonthPanel from "./am-month-panel";
    import AmIcon from '../am-icon'
    import AmButton from '../am-button'
    import AmButtonGroup from '../am-button/am-button-group'
    import {zeroize} from "../../scripts/utils";
    import AmDatePanel from "./am-date-panel";
    import AmPopover from '../am-popover'
    import {oneOf} from "../../scripts/utils";
    import {typeOf} from "../../scripts/utils";
    import {dateFormat} from "../../scripts/utils";


    export default {
        name: "am-datepicker",
        components: {
            AmDatePanel,
            AmYearPanel,
            AmMonthPanel,
            AmInput,
            AmIcon,
            AmButton,
            AmButtonGroup,
            AmPopover,
        },
        props: {
            value: {type: Date | String,},
            show: {type: Boolean, default: false},
            view: {
                type: String, default: 'date', validator(val) {
                    return oneOf(val, ['year', 'month', 'date'])
                },
            },
            format: {type: String, default: 'yyyy-MM-dd'},

            type: {
                type: String, default: 'line', validator(val) {
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
            suffixIcon: {type: String, default: 'fas-calendar-alt'},
            placeholder: {type: String, default: '点击输入内容...'},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            clearable: {type: Boolean},
            regexp: {type: RegExp},
        },
        watch: {
            value(val) {
                this.currentValue = this.valueIsString ? !!val ? new Date(val.replace(/-/g, '/')) : new Date() : val
                this.reset()
            },
            currentValue(val) {
                this.$emit('input', this.valueIsString ? dateFormat(val, this.format) : val)
            },
            show(val) {
                if (this.currentShow !== val) this.currentShow = val
            },
            currentShow(val) {
                this.$emit('update:show', val)
                if (!!val && this.mode === 'year') {
                    this.$nextTick(() => this.$refs.year.updatePosition())
                }
            },
            mode(val) {
                if (val === 'year') {
                    this.$nextTick(() => this.$refs.year.updatePosition())
                }
            },
        },
        data() {
            const valueIsString = ((this.value == null) || typeOf(this.value) === 'string')
            const currentValue = valueIsString ? !!this.value ? new Date(this.value.replace(/-/g, '/')) : null : this.value
            const now = new Date()
            return {
                valueIsString,
                currentValue,
                currentYear: !!currentValue ? currentValue.getFullYear() : now.getFullYear(),
                currentMonth: !!currentValue ? currentValue.getMonth() : now.getMonth(),
                currentDate: !!currentValue ? currentValue.getDate() : now.getDate(),
                mode: this.view,
                currentShow: this.show,
            }
        },
        computed: {
            hasMonth() {
                return oneOf(this.view, ['month', 'date'])
            },
            hasDate() {
                return oneOf(this.view, ['date'])
            },
            showValue() {
                if (!this.currentValue) return null
                return dateFormat(this.currentValue, this.format)
            },
        },
        methods: {
            zeroize,
            handleClickDate(date) {
                this.currentYear = date.year
                this.currentMonth = date.month
                this.currentDate = date.day
            },
            nextMonth() {
                this.currentMonth++
                if (this.currentMonth === 12) {
                    this.currentMonth = 0
                    this.currentYear++
                }
            },
            prevMonth() {
                this.currentMonth--
                if (this.currentMonth === -1) {
                    this.currentMonth = 11
                    this.currentYear--
                }
            },
            handleConfirm() {
                let date = new Date()
                date.setFullYear(this.currentYear)
                date.setMonth(this.currentMonth)
                date.setDate(this.currentDate)
                this.currentValue = date
                this.currentShow = false
            },
            handleCancel() {
                this.reset()
                this.currentShow = false
            },
            handlePickYear() {
                if (this.hasMonth)
                    this.mode = 'month'
            },
            handlePickMonth() {
                if (this.hasDate)
                    this.mode = 'date'
            },
            reset() {
                if (!this.currentValue) return
                this.currentYear = this.currentValue.getFullYear();
                this.currentMonth = this.currentValue.getMonth();
                this.currentDate = this.currentValue.getDate();
            },
        },
    }
</script>
