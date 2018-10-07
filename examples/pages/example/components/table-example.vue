<template>
    <div class="table-example">
        <am-button @click="log()">headColumns</am-button>
        <div style="width: 1000px;height: 400px">
            <am-table ref="table1">
                <am-table-column title="1" field="name">
                    <am-table-column title="2" field="name"></am-table-column>
                    <am-table-column title="3" field="age"></am-table-column>
                </am-table-column>
                <am-table-column title="4" field="age"></am-table-column>
            </am-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table-example",
        methods: {
            log() {
                console.log(this.$refs.table1.headColumns)
            },
        },
    }
</script>
