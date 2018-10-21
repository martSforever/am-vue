<template>
    <am-input shape="none" type="fill" :color="color" :size="size" v-model="currentValue" @enter="handleEnter"/>
</template>

<script>
    import AmInput from "../am-input/am-input";

    export default {
        name: "am-auto-table-filter-input",
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
                currentValue: this.value
            }
        },
        methods: {
            handleEnter() {
                this.$emit('confirm')
            },
            getValue() {
                return !!this.currentValue ? {operator: '~', value: this.currentValue, tagValue: this.currentValue} : null
            },
            formatFilter({title, value, operator, field, tagValue}) {
                return {title, value, operator, field, tagValue}
            },
        },
    }
</script>
