<template>
    <div class="auto-table-lov-example example-page">
        <am-auto-table title="值列表"
                       :multi-insertable="true"
                       :multi-updateable="true"
                       :option="option">
            <am-table-column-input title="显示值" field="label"/>
            <am-table-column-input title="实际值" field="code"/>
            <am-table-column-input title="类型" field="type"/>
            <am-button slot="normalBtn" label="刷新缓存" icon="fas-redo-alt" @click="refreshLov"/>
        </am-auto-table>
        <div class="title">值列表文本显示组件</div>
        <div class="example-row">
            <am-lov :code="code" type="ACCT-TYPE"/>
        </div>
        <div class="title">值列表选择组件</div>
        <div class="example-row">
            <am-lov-pick lov-type="ACCT-TYPE" v-model="code"/>
        </div>
        <div class="title">测试</div>
        <am-button label="test" @click="test"/>

    </div>
</template>

<script>
    import {AutoOption} from '../../../../src/components/am-auto-table/auto-option';
    import AmLov from '../../../components/am-lov';
    import AmLovPick from "../../../components/am-lov-pick";
    import {getLovByLabelAndType, getLovByNameAndType, getLovsByType, loadLov} from "../../../scripts/lov";
    import Vue from 'vue'

    export default {
        name: 'auto-table-lov-example',
        components: {AmLovPick, AmLov},
        data() {
            return {
                code: 'self-person',

                option: new AutoOption({
                    url: 'lov/queryPage',
                    countUrl: 'lov/queryCount',
                    insertUrl: 'lov/insert',
                    multiInserUrl: 'lov/multiInsert',
                    updateUrl: 'lov/update',
                    multiUpdateUrl: 'lov/multiUpdate',
                    deleteUrl: 'lov/delete',

                    param: {
                        headId: '123456'
                    }
                })
            };
        },
        methods: {
            async refreshLov() {
                await loadLov();
            },
            test() {
                // console.log(getLovByLabelAndType('大客户','ACCT-TYPE'))
                // console.log(getLovsByType('ACCT-TYPE'))
                console.dir(this.$options.components)
            },
        },
    };
</script>
