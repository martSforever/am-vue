<template>
    <div class="am-table-content">
        <am-table-head
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
        />
        <am-table-body
            :render-columns="renderColumns"
            :list="list"
            :padding="padding"
            :body-row-height="bodyRowHeight"
            :table-head-height="tableHeadHeight"
        />
    </div>
</template>

<script>
    import AmTableHead from "./am-table-head";
    import AmTableBody from "./am-table-body";

    export default {
        name: "am-table-content",
        components: {AmTableBody, AmTableHead},
        props: {
            headColumns: {},
            padding: {},
            headRowHeight: {},
            tableHeadHeight: {},
            renderColumns: {},
            bodyRowHeight: {},
            list: {},
        },
    }
</script>
