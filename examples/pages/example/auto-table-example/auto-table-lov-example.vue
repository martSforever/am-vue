<template>
    <div class="auto-table-lov-example example-page">
        <div>
            --
            <am-lov code="self-person" type="ACCT-TYPE"/>
            --
        </div>
        <am-auto-table title="值列表"
                       :option="option">
            <am-table-column-input title="显示值" field="label"/>
            <am-table-column-input title="实际值" field="code"/>
            <am-table-column-input title="类型" field="type"/>
            <am-button slot="normalBtn" label="刷新缓存" icon="fas-redo-alt"/>
        </am-auto-table>
    </div>
</template>

<script>
    import {AutoOption} from '../../../../src/components/am-auto-table/auto-option';
    import AmLov from '../../../components/am-lov';

    export default {
        name: 'auto-table-lov-example',
        components: {AmLov},
        data() {
            return {
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
    };
</script>
