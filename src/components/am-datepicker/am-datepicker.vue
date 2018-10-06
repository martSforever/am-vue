<template>
    <div class="am-datepicker">
        <am-input :suffix-icon="suffixIcon" :value="showValue" ref="input" @click="currentShow =true"/>
        <am-popover parent-name="am-datepicker"
                    reference-name="input"
                    @click-outside="handleCancel"
                    v-model="currentShow">
            <div class="am-datepicker-content-wrapper">
                <div class="am-datepicker-head">
                    <am-icon icon="fas-angle-double-left" @click="currentYear--"/>
                    <am-icon icon="fas-angle-left" @click="prevMonth"/>
                    <div class="am-datepicker-head-text">
                        <span @click="mode='year'">{{currentYear}}</span>-<span @click="mode='month'">{{zeroize(currentMonth+1)}}</span>-<span
                        @click="mode='date'">{{zeroize(currentDate)}}</span>
                    </div>
                    <am-icon icon="fas-angle-right" @click="nextMonth"/>
                    <am-icon icon="fas-angle-double-right" @click="currentYear++"/>
                </div>
                <div class="am-datepicker-panel-wrapper">
                    <am-date-panel v-model="currentDate"
                                   :year="currentYear"
                                   :month="currentMonth"
                                   :date="currentDate"
                                   @click="handleClickDate"
                                   v-show="mode === 'date'"/>
                    <am-year-panel v-model="currentYear"
                                   v-show="mode === 'year'"
                                   ref="year"
                                   @click="mode = 'month'"
                    />
                    <am-month-panel v-model="currentMonth"
                                    v-show="mode === 'month'"
                                    @click="mode = 'date'"
                    />
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
            value: {type: Date, default: () => new Date()},
            show: {type: Boolean, default: false},
            suffixIcon: {type: String, default: 'fas-calendar-alt'},
        },
        watch: {
            value(val) {
                this.currentValue = val
                this.reset()
            },
            currentValue(val) {
                this.$emit('input', val)
            },
            show(val) {
                if (this.currentShow !== val) this.currentShow = val
            },
            currentShow(val) {
                this.$emit('update:show', val)
            },
            mode(val) {
                if (val === 'year') {
                    this.$nextTick(() => this.$refs.year.updatePosition())
                }
            },
        },
        data() {
            return {
                currentValue: this.value,
                currentYear: this.value.getFullYear(),
                currentMonth: this.value.getMonth(),
                currentDate: this.value.getDate(),
                mode: 'date',
                currentShow: this.show,
            }
        },
        computed: {
            showValue() {
                return `${this.currentValue.getFullYear()}-${zeroize(this.currentValue.getMonth() + 1)}-${zeroize(this.currentValue.getDate())}`
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
            reset() {
                this.currentYear = this.currentValue.getFullYear();
                this.currentMonth = this.currentValue.getMonth();
                this.currentDate = this.currentValue.getDate();
            },
        },
    }
</script>
