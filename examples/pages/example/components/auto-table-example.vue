<template>
    <div class="auto-table-example example-page">
        <am-auto-table title="客户列表" :option="option">
            <am-table-column title="客户" field="acctName"/>
            <am-table-column title="客户编码" field="acctCode"/>
            <am-table-column title="出生日期" field="birthday" width="220px"/>
            <am-table-column title="客户类型" field="acctType"/>
            <am-table-column title="年龄" field="acctAge"/>
            <am-table-column title="所属经销商" field="acctAgency"/>
        </am-auto-table>
    </div>
</template>

<script>
    import {AutoOption} from "../../../../src/components/am-auto-table/auto-option";

    export default {
        name: "auto-table-example",
        data() {
            return {
                option: new AutoOption({
                    url: 'acct/queryPage',
                    countUrl: 'acct/queryCount',
                })
            }
        },
        mounted() {
        }
    }
</script>
