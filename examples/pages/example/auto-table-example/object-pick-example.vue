<template>
    <div class="object-pick-example example-page">

        <am-button label="pick object" @click="show = !show"/>
        <am-radio v-model="singleSelect" :label="'singleSelect:'+singleSelect"/>

        <am-object-pick v-model="show" :option="chargersOption">
            <am-table-column title="客户" field="acctName"/>
            <am-table-column title="客户编码" field="acctCode"/>
            <am-table-column title="出生日期" field="birthday"/>
            <am-table-column-lov-pick title="客户类型" field="acctType" lov-type="ACCT-TYPE"/>
            <am-table-column title="年龄" field="acctAge"/>
        </am-object-pick>
    </div>
</template>

<script>

    import AmObjectPick from '../../../components/am-object-pick';
    import {AutoOption} from '../../../../src/components/am-auto-table/auto-option';

    export default {
        name: 'object-pick-example',
        components: {AmObjectPick},
        methods: {},
        data() {
            return {
                show: false,
                singleSelect: true,
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
            };
        },
    };
</script>
