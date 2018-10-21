<template>
    <am-table-column ref="column"
                     :title="title"
                     :field="field"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed"
                     :no-search="noSearch"
                     :filter-component="filterComponent"
                     :filter-option="{lovType}">

        <template slot-scope="{row,rowIndex,col,colIndex}">
            <am-table-column-lov-pick-item
                :row="row"
                :row-index="rowIndex"
                :col="col"
                :col-index="colIndex"
                :field="field"
                :editable="editable"

                :lov-type="lovType"
            />
        </template>
    </am-table-column>
</template>

<script>
    import AmTableColumnLovPickItem from "./am-table-column-lov-pick-item";
    import tableColumnMixin from "../../src/components/am-table-expansion/table-column-mixin";

    export default {
        name: "am-table-column-lov-pick",
        components: {AmTableColumnLovPickItem},
        mixins: [tableColumnMixin],
        props: {
            lovType: {},
            filterComponent: {default: 'am-auto-table-filter-lov'},
        },
    }
</script>

