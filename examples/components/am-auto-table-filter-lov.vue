<template>
    <am-lov-pick shape="none" type="fill" :color="color" :size="size" :lov-type="filterOption.lovType" v-model="currentValue" ref="lovPick"/>
</template>

<script>

    import AmLovPick from "./am-lov-pick";

    export default {
        name: "am-auto-table-filter-lov",
        components: {AmLovPick},
        props: {
            size: {type: String,},
            color: {type: String,},
            placeholder: {type: String, default: '搜索关键字...'},
            value: {},
            filterOption: {},
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
                return !!this.currentValue ? {operator: '=', value: this.currentValue, tagValue: this.$refs.lovPick.label} : null
            },
            formatFilter({title, value, operator, field, tagValue}) {
                return {title, value, operator, field, tagValue}
            },
        },
    }
</script>
