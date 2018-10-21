<template>
    <div class="auto-table-example example-page">
        <am-radio label="multiUpdateable" v-model="multiUpdateable" size="small"/>
        <am-radio label="multiInsertable" v-model="multiInsertable" size="small"/>
        <am-auto-table title="客户列表"
                       :option="option"
                       :indexing="false"
                       :multi-updateable="multiUpdateable"
                       :multi-insertable="multiInsertable"
                       sort-field="acctName"
                       :sort-desc="true"
        >
            <am-table-column title="客户" field="acctName" fixed="left"/>
            <am-table-column-input title="客户" field="acctName"/>
            <am-table-column-input title="客户编码" field="acctCode"/>
            <am-table-column-datepicker title="出生日期" field="birthday"/>
            <am-table-column-datepicker title="创建时间" field="createdAt" format="yyyy-MM-dd hh:mm:ss" :editable="false"/>
            <am-table-column title="客户类型" field="acctType"/>
            <am-table-column-lov-pick title="客户类型" field="acctType" lov-type="ACCT-TYPE"/>
            <am-table-column title="年龄" field="acctAge"/>
            <am-table-column title="所属经销商" field="acctAgency"/>
        </am-auto-table>
    </div>
</template>

<script>
    import {AutoOption} from '../../../../src/components/am-auto-table/auto-option';
    import AmTableColumnLovPick from "../../../components/am-table-column-lov-pick";

    export default {
        name: 'auto-table-example',
        components: {AmTableColumnLovPick},
        data() {
            return {
                multiUpdateable: true,
                multiInsertable: true,

                option: new AutoOption({
                    url: 'acct/queryPage',
                    countUrl: 'acct/queryCount',
                    insertUrl: 'acct/insert',
                    multiInserUrl: 'acct/multiInsert',
                    updateUrl: 'acct/update',
                    multiUpdateUrl: 'acct/multiUpdate',
                    deleteUrl: 'acct/delete',

                    param: {
                        headId: '123456'
                    }
                })
            };
        },
        mounted() {
        }
    };
</script>
