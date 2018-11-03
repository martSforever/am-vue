<template>
    <div class="object-pick-example example-page">

        <!--<div class="example-row">
            <am-button label="pick object" @click="show = !show"/>
            <am-radio v-model="singleSelect" :label="'singleSelect:'+singleSelect"/>

            <am-object-pick v-model="show" :option="chargersOption">
                <am-table-column title="客户" field="acctName"/>
                <am-table-column title="客户编码" field="acctCode"/>
                <am-table-column title="出生日期" field="birthday"/>
                <am-table-column-lov-pick title="客户类型" field="acctType" lov-type="ACCT-TYPE"/>
                <am-table-column title="年龄" field="acctAge"/>
            </am-object-pick>
        </div>-->

        <div class="example-row">
            <am-button @click="testObjectPick">ObjectPick</am-button>
            <am-radio v-model="singleSelect" label="单选"/>
        </div>

    </div>
</template>

<script>

    import AmObjectPick from '../../../components/am-object-pick';
    import {AutoOption} from '../../../../src/components/am-auto-table/auto-option';
    import ObjectPick from "../../../components/object-pick";

    export default {
        name: 'object-pick-example',
        components: {AmObjectPick},
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
            testObjectPick() {
                ObjectPick.pick({
                    renderFunc: this.renderFunc,
                    option: this.chargersOption,
                    singleSelect: this.singleSelect,
                    onConfirm: (ret) => {
                        console.log('confirm')
                        if (!!this.singleSelect) {
                            console.log(ret.acctName)
                        } else {
                            ret.forEach(item => {
                                console.log(item.acctName)
                            })
                        }
                    },
                    onCancel: () => {
                        console.log('cancel')
                    },
                })
            },
        }
    };
</script>
