<template>
    <div style="display: flex;align-items: center">
        <am-datepicker shape="none" type="fill" :color="color" :size="size" v-model="startValue" :width="90"/>
        ----
        <am-datepicker shape="none" type="fill" :color="color" :size="size" v-model="endValue" :width="90"/>
    </div>
</template>

<script>
    import AmInput from "../am-input/am-input";

    export default {
        name: "am-auto-table-filter-datepicker",
        components: {AmInput},
        props: {
            size: {type: String,},
            color: {type: String,},
            placeholder: {type: String, default: '搜索关键字...'},
            value: {},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                currentValue: this.value,
                startValue: null,
                endValue: null,
            }
        },
        methods: {
            handleEnter() {
                this.$emit('confirm')
            },
            getValue() {
                const ret = []
                !!this.startValue && ret.push({operator: '>=', value: this.startValue, tagValue: this.startValue})
                !!this.endValue && ret.push({operator: '<=', value: this.endValue, tagValue: this.endValue})
                return ret
            },
            formatFilter({title, value, operator, field, tagValue}) {
                return {title, value, operator, field, tagValue}
            },
            clearValue() {
                this.startValue = null
                this.endValue = null
            },
        },
    }
</script>
