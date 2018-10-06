<template>
    <div class="am-datepicker">
        <am-button @click="$refs.year.addPreviousYears()">addPreviousYears</am-button>
        <am-input :suffix-icon="suffixIcon"/>
        <div class="am-datepicker-content-wrapper">
            <am-year-pannel v-model="currentYear" ref="year"/>
        </div>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmYearPannel from "./am-year-pannel";

    export default {
        name: "am-datepicker",
        components: {
            AmYearPannel,
            AmInput,
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
    }
</script>
