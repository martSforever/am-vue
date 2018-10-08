<template>
    <am-table-column ref="column"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed">
        <template slot-scope="{rowIndex}">{{rowIndex+1}}</template>
    </am-table-column>
</template>

<script>
    import AmTableColumn from '../am-table/am-table-column';
    import tableColumnMixin from './table-column-mixin';

    export default {
        name: 'am-table-column-index',
        components: {AmTableColumn},
        mixins: [
            tableColumnMixin
        ],
    };
</script>
