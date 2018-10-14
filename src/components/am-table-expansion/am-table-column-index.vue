<template>
    <am-table-column ref="column"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :no-search="noSearch"
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
        props: {
            title: {type: String, desc: '列标题，当没有titleRenderFunc以及没有$scopedSlots.title时，显示该文本', default: '#'},
            width: {default: '32px', desc: '列宽度'},
            order: {default: 999, desc: '列排序'},
            noSearch: {type: Boolean, default: true},
        }
    };
</script>
