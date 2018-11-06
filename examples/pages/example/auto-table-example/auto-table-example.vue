<template>
    <div class="auto-table-example example-page">
        <div class="example-row">
            <am-radio label="multiUpdateable" v-model="multiUpdateable" size="small"/>
            <am-radio label="multiInsertable" v-model="multiInsertable" size="small"/>
        </div>
        <am-auto-table title="负责人列表"
                       :option="chargersOption"
                       :indexing="true"
                       :multi-updateable="multiUpdateable"
                       :multi-insertable="multiInsertable"
        >
            <am-table-column title="客户" field="acctName"/>
            <am-table-column-input title="客户" field="acctName"/>
            <am-table-column-input title="客户编码" field="acctCode"/>
            <am-table-column-datepicker title="出生日期" field="birthday"/>
            <am-table-column-datepicker title="创建时间" field="createdAt" format="yyyy-MM-dd hh:mm:ss" :editable="false"/>
            <!--<am-table-column title="客户类型" field="acctType"/>-->
            <am-table-column-lov-pick title="客户类型" field="acctType" lov-type="ACCT-TYPE"/>
            <am-table-column title="年龄" field="acctAge"/>
            <am-table-column title="所属经销商" field="acctAgency"/>
        </am-auto-table>

        <am-auto-table title="门店列表"
                       :option="storesOption"
                       :indexing="true"
                       :multi-updateable="multiUpdateable"
                       :multi-insertable="multiInsertable"
        >
            <am-table-column-input title="名称" field="name"/>
            <am-table-column-input title="编码" field="code"/>
            <am-table-column-lov-pick title="类型" field="type" lov-type="STORE-TYPE"/>
            <am-table-column-object-pick title="经销商" field="agencyName"
                                         :render-func="renderFunc"
                                         :option="chargersOption"
                                         show-key="agencyName"
                                         :map="{agencyId:'id',agencyName:'acctName'}"/>
        </am-auto-table>
    </div>
</template>

<script>
    import {AutoOption} from '../../../../src/components/am-auto-table/auto-option';
    import AmTableColumnLovPick from '../../../components/am-table-column-lov-pick';

    export default {
        name: 'auto-table-example',
        components: {AmTableColumnLovPick},
        data() {
            return {
                multiUpdateable: true,
                multiInsertable: true,

                chargersOption: new AutoOption({
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
                }),

                storesOption: new AutoOption({
                    url: 'store/queryPage',
                    countUrl: 'store/queryCount',
                    insertUrl: 'store/insert',
                    multiInserUrl: 'store/multiInsert',
                    updateUrl: 'store/update',
                    multiUpdateUrl: 'store/multiUpdate',
                    deleteUrl: 'store/delete',
                }),

            };
        },
        mounted() {
        },
        methods: {
            renderFunc(h) {
                return (
                    <div>
                        <am-table-column title="客户" field="acctName"/>
                        <am-table-column title="客户编码" field="acctCode"/>
                        <am-table-column title="出生日期" field="birthday"/>
                        <am-table-column title="年龄" field="acctAge"/>
                    </div>
                )
            },
        }
    };
</script>
