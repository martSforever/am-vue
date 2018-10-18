<template>
    <am-table-column ref="column"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed">
        <template slot-scope="{row,rowIndex,col,colIndex}">
            <am-table-column-datepicker-item
                :row="row"
                :row-index="rowIndex"
                :col="col"
                :col-index="colIndex"
                :field="field"
                :editable="editable"
                :format="format"
            />
        </template>
    </am-table-column>
</template>

<script>
    import tableColumnMixin from '../table-column-mixin';
    import AmTableColumnDatepickerItem from './am-table-column-datepicker-item';
    import AmTableColumn from '../../am-table/am-table-column';

    export default {
        name: 'am-table-column-datepicker',
        components: {AmTableColumn, AmTableColumnDatepickerItem},
        mixins: [tableColumnMixin],
        props: {
            format: {type: String, default: 'yyyy-MM-dd'},
        },
    };
</script>
