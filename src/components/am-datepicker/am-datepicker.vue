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
            <div class="am-datepicker-pannel-wrapper">
                <am-year-pannel v-model="currentYear" ref="year"/>
            </div>
            <div class="am-datepicker-pannel-wrapper">
                <am-month-pannel v-model="currentMonth"/>
            </div>
        </div>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmYearPannel from "./am-year-pannel";
    import AmMonthPannel from "./am-month-pannel";
    import AmIcon from '../am-icon'
    import AmButton from '../am-button'
    import {zeroize} from "../../scripts/utils";

    export default {
        name: "am-datepicker",
        components: {
            AmMonthPannel,
            AmYearPannel,
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
                return `${this.currentYear}-${this.currentMonth + 1}-${this.currentDate}`
            },
        },
        methods: {
            zeroize,
        },
    }
</script>
