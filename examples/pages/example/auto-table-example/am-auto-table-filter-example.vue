<template>
    <div class="am-auto-table-filter-example example-page">
        <am-auto-table-filter :search-cols="searchCols"/>
    </div>
</template>

<script>

    export default {
        name: "am-auto-table-filter-example",
        components: {},
        data() {
            return {
                searchCols: [
                    {title: '客户', field: 'acctName', filterComponent: 'am-auto-table-filter-input'},
                    {title: '经销商', field: 'agencyName', filterComponent: 'am-auto-table-filter-input'},
                ]
            }
        },
    }
</script>
