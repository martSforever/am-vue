<template>
    <div class="am-table">
        <am-table-column-controller
            :columns.sync="columns"
            :head-columns.sync="headColumns">
            <slot></slot>
        </am-table-column-controller>


    </div>
</template>

<script>
    import AmTableColumnController from "./am-table-column-controller";

    export default {
        name: "am-table",
        components: {AmTableColumnController},
        data() {
            return {
                columns: [],
                headColumns: [],
            }
        },
    }
</script>
