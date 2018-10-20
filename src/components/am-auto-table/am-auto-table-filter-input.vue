<template>
    <am-input shape="none" type="fill" :color="color" :size="size" v-model="searchValue" @enter="handleEnter"/>
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
        },
        data() {
            return {
                searchValue: null,
            }
        },
        methods: {
            handleEnter() {
                this.$emit('confirm')
            },
            getValue() {
                return !!this.searchValue ? {operator: '~', value: this.searchValue} : null
            },
        },
    }
</script>
