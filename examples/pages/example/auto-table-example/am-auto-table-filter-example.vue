<template>
    <div class="am-auto-table-filter-example example-page">
        <am-auto-table-filter :search-cols="searchCols"/>
    </div>
</template>

<script>
    import AmAutoTableFilter from "../../../components/am-auto-table-filter";

    export default {
        name: "am-auto-table-filter-example",
        components: {AmAutoTableFilter},
        data() {
            return {
                searchCols: [
                    {title: '客户', field: 'acctName'},
                    {title: '经销商', field: 'agencyName',},
                ]
            }
        },
    }
</script>
