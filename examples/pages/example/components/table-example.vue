<template>
    <div class="table-example">
        <am-button @click="log()">headColumns</am-button>
        <div style="width: 1000px;height: 400px">
            <am-table ref="table1">
                <am-table-column title="广东省" field="name">
                    <am-table-column title="佛山市" field="name">
                        <am-table-column title="禅城区" field="name"></am-table-column>
                        <am-table-column title="顺德区" field="name"></am-table-column>
                    </am-table-column>
                    <am-table-column title="广州市" field="age">
                        <am-table-column title="白云区" field="name"></am-table-column>
                        <am-table-column title="越秀区" field="name"></am-table-column>
                        <am-table-column title="番禺区" field="name"></am-table-column>
                    </am-table-column>
                </am-table-column>
                <am-table-column title="广东省" field="name">
                    <am-table-column title="佛山市" field="name">
                        <am-table-column title="禅城区" field="name"></am-table-column>
                        <am-table-column title="顺德区" field="name"></am-table-column>
                    </am-table-column>
                    <am-table-column title="广州市" field="age">
                        <am-table-column title="白云区" field="name"></am-table-column>
                        <am-table-column title="越秀区" field="name"></am-table-column>
                        <am-table-column title="番禺区" field="name"></am-table-column>
                    </am-table-column>
                </am-table-column>
                <am-table-column title="广东省" field="name">
                    <am-table-column title="佛山市" field="name">
                        <am-table-column title="禅城区" field="name"></am-table-column>
                        <am-table-column title="顺德区" field="name"></am-table-column>
                    </am-table-column>
                    <am-table-column title="广州市" field="age">
                        <am-table-column title="白云区" field="name"></am-table-column>
                        <am-table-column title="越秀区" field="name"></am-table-column>
                        <am-table-column title="番禺区" field="name"></am-table-column>
                    </am-table-column>
                </am-table-column>

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
