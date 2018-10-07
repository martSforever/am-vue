<template>
    <div class="am-table-content">
        <am-table-head
            ref="head"
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
            @scroll="handleBodyScroll"
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
        methods: {
            handleBodyScroll(e) {
                this.$refs.head.$refs.scrollbar.$refs.wrapper.scrollLeft = e.target.scrollLeft
            },
        },
    }
</script>
