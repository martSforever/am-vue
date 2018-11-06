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
                     :filter-component="filterComponent">

        <template slot-scope="{row,rowIndex,col,colIndex}">
            <am-table-column-object-pick-item
                :row="row"
                :row-index="rowIndex"
                :col="col"
                :col-index="colIndex"
                :field="field"
                :editable="editable"

                :render-func="renderFunc"
                :option="option"
                :show-key="showKey"
                :map="map"
            />
        </template>
    </am-table-column>
</template>

<script>
    import AmTableColumnObjectPickItem from "./am-table-column-object-pick-item";
    import tableColumnMixin from "../../src/components/am-table-expansion/table-column-mixin";

    export default {
        name: "am-table-column-object-pick",
        components: {AmTableColumnObjectPickItem},
        mixins: [tableColumnMixin],
        props: {
            renderFunc: {required: true},
            option: {required: true},
            showKey: {required: true},
            map: {required: true},
            width: {default: '200px'},
        },

    }
</script>
