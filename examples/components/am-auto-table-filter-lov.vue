<template>
    <am-lov-pick shape="none" type="fill" :color="color" :size="size" lov-type="ACCT-TYPE"/>
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
        },
        watch: {
            value(val) {
                if (this.searchValue !== val) this.searchValue = val;
            },
            searchValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                searchValue: this.value
            }
        },
        methods: {
            handleEnter() {
                this.$emit('confirm')
            },
            getValue() {
                return !!this.searchValue ? {operator: '~', value: this.searchValue, tagValue: this.searchValue} : null
            },
            formatFilter({title, value, operator, field, tagValue}) {
                return {title, value, operator, field, tagValue}
            },
        },
    }
</script>
