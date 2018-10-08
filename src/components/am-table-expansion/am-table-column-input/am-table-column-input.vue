<template>
    <am-table-column ref="column"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed">
        <template slot-scope="{row,rowIndex,col,colIndex}">
            <am-table-column-input-item
                :row="row"
                :row-index="rowIndex"
                :col="col"
                :col-index="colIndex"
                :field="field"
                :editable="editable"
            />
        </template>
    </am-table-column>
</template>

<script>
    import tableColumnMixin from "../table-column-mixin";
    import AmTableColumnInputItem from "./am-table-column-input-item";

    export default {
        name: "am-table-column-input",
        components: {AmTableColumnInputItem},
        mixins: [
            tableColumnMixin
        ],
    }
</script>
