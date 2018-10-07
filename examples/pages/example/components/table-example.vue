<template>
    <div class="table-example">
        <am-button @click="log()">headColumns</am-button>
        <div style="width: 1000px;height: 400px">
            <am-table ref="table1">
                <am-table-column title="客户" field="name">
                    <am-table-column title="客户姓名" field="name"></am-table-column>
                    <am-table-column title="客户联系方式" field="age"></am-table-column>
                </am-table-column>
                <am-table-column title="商家" field="age"></am-table-column>
                <am-table-column title="客户" field="name">
                    <am-table-column title="客户姓名" field="name"></am-table-column>
                    <am-table-column title="客户联系方式" field="age"></am-table-column>
                </am-table-column>
                <am-table-column title="商家" field="age"></am-table-column>
                <am-table-column title="客户" field="name">
                    <am-table-column title="客户姓名" field="name"></am-table-column>
                    <am-table-column title="客户联系方式" field="age"></am-table-column>
                </am-table-column>
                <am-table-column title="商家" field="age"></am-table-column>
                <am-table-column title="客户" field="name">
                    <am-table-column title="客户姓名" field="name"></am-table-column>
                    <am-table-column title="客户联系方式" field="age"></am-table-column>
                </am-table-column>
                <am-table-column title="商家" field="age"></am-table-column>
                <am-table-column title="客户" field="name">
                    <am-table-column title="客户姓名" field="name"></am-table-column>
                    <am-table-column title="客户联系方式" field="age"></am-table-column>
                </am-table-column>
                <am-table-column title="商家" field="age"></am-table-column>
            </am-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table-example",
        props: {},
        methods: {
            log() {
                console.log(this.$refs.table1.headColumns)
            },
        },
    }
</script>
