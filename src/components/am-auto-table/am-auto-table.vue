<template>
    <div class="am-auto-table">
        <div class="am-auto-table-header">
            <div>
                <am-button icon="fas-cog" icon-only size="small" type="none"/>
                <am-select size="small" suffix-icon="fas-angle-down" placeholder="搜索类型" :width="60" shape="none" type="none"/>
                <am-input size="small" suffix-icon="fas-search" shape="none" type="none" placeholder="搜索关键字"/>
            </div>
        </div>
        <am-table
            :row-num="rowNum"
            :list="list">
            <am-table-column-index v-if="indexing"/>
            <slot></slot>
        </am-table>
        <div class="am-auto-table-header">
            <div>
                <am-button label="页大小：" type="none" size="small"/>
                <am-select size="small" suffix-icon="fas-angle-down" :value="rowNum" :width="40" shape="none" type="none" :size-equal="true"/>
            </div>
            <am-button-group size="small" shape="none">
                <am-button label="保存编辑"/>
                <am-button label="取消编辑" color="error"/>
            </am-button-group>
        </div>
    </div>
</template>

<script>
    import AmTable from "../am-table/am-table";
    import AmTableColumnIndex from "../am-table-expansion/am-table-column-index";
    import AmButtonGroup from "../am-button/am-button-group";
    import AmButton from "../am-button/am-button";
    import AmInput from "../am-input/am-input";
    import AmSelect from "../am-select/am-select";

    export default {
        name: "am-auto-table",
        components: {AmSelect, AmInput, AmButton, AmButtonGroup, AmTableColumnIndex, AmTable},
        props: {
            indexing: {type: Boolean, default: true},
            rowNum: {type: Boolean, default: 10},
        },
        data() {
            return {
                list: [
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '刘德华', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                    {acctName: '张学友', acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},
                ]
            }
        },
    }
</script>
