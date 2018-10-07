<template>
    <div class="am-table">
        <am-table-column-controller
            :columns.sync="columns"
            :head-columns.sync="headColumns">
            <slot></slot>
        </am-table-column-controller>

        <am-table-content
            :head-columns="headColumns"
        />
    </div>
</template>

<script>
    import AmTableColumnController from "./am-table-column-controller";
    import AmTableContent from "./am-table-content";

    export default {
        name: "am-table",
        components: {AmTableContent, AmTableColumnController},
        data() {
            return {
                columns: [],
                headColumns: [],
            }
        },
    }
</script>
