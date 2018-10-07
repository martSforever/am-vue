<template>
    <div class="am-table">
        <am-table-column-controller
            :columns.sync="columns"
            :head-columns.sync="headColumns">
            <slot></slot>
        </am-table-column-controller>

        <am-table-content
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
        />
    </div>
</template>

<script>
    import AmTableColumnController from "./am-table-column-controller";
    import AmTableContent from "./am-table-content";

    export default {
        name: "am-table",
        components: {AmTableContent, AmTableColumnController},
        props: {
            padding: {type: Number, default: 3},
            headRowHeight: {type: Number, default: 32},
        },
        data() {
            return {
                columns: [],
                headColumns: [],
            }
        },
        computed: {
            tableHeadHeight() {
                return 4 + (this.headRowHeight * this.headColumns.length) + 2 * (this.headColumns.length - 1)
            },
        },
    }
</script>
