<template>
    <div class="pagination-example example-page">
        <div>
            <am-pagination :total-size="62" size="small" @update:page="handleNumChange" @size-change="handleSizeChange" @refresh="handleRefresh"></am-pagination>
        </div>
        <div>
            <am-pagination :total-size="62" size="default"></am-pagination>
        </div>
        <div>
            <am-pagination :total-size="62" size="large"></am-pagination>
        </div>
        <!--<am-pagination/>-->
    </div>
</template>

<script>
    export default {
        name: "pagination-example",
        methods: {
            handleNumChange(item) {
                console.log('handleNumChange', item)
            },
            handleSizeChange(size) {
                console.log('handleSizeChange', size)
            },
            handleRefresh() {
                console.log('handleClickRefresh')
            },
        },
    }
</script>
