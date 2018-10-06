<template>
    <div class="am-datepicker">
        <am-button @click="$refs.year.updatePosition()">updatePosition</am-button>
        <am-input :suffix-icon="suffixIcon"
                  :value="showValue"/>
        <div class="am-datepicker-content-wrapper">
            <div class="am-datepicker-head">
                <am-icon icon="fas-angle-double-left"/>
                <am-icon icon="fas-angle-left"/>
                <div class="am-datepicker-head-text">
                    <span>{{currentYear}}</span>-<span>{{zeroize(currentMonth+1)}}</span>-<span>{{zeroize(currentDate)}}</span>
                </div>
                <am-icon icon="fas-angle-right"/>
                <am-icon icon="fas-angle-double-right"/>
            </div>
            <div class="am-datepicker-panel-wrapper">
                <am-date-panel v-model="currentDate"/>
            </div>
            <div class="am-datepicker-panel-wrapper">
                <am-year-panel v-model="currentYear" ref="year"/>
            </div>
            <div class="am-datepicker-panel-wrapper">
                <am-month-panel v-model="currentMonth"/>
            </div>
        </div>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmYearPanel from "./am-year-panel";
    import AmMonthPanel from "./am-month-panel";
    import AmIcon from '../am-icon'
    import AmButton from '../am-button'
    import {zeroize} from "../../scripts/utils";
    import AmDatePanel from "./am-date-panel";

    export default {
        name: "am-datepicker",
        components: {
            AmDatePanel,
            AmYearPanel,
            AmMonthPanel,
            AmInput,
            AmIcon,
            AmButton,
        },
        props: {
            value: {type: Date, default: () => new Date()},
            suffixIcon: {type: String, default: 'fas-calendar-alt'},
        },
        data() {
            return {
                currentValue: this.value,
                currentYear: this.value.getFullYear(),
                currentMonth: this.value.getMonth(),
                currentDate: this.value.getDate(),
            }
        },
        computed: {
            showValue() {
                return `${this.currentYear}-${zeroize(this.currentMonth + 1)}-${zeroize(this.currentDate)}`
            },
        },
        methods: {
            zeroize,
        },
    }
</script>
