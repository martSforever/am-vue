<template>
    <div class="auto-table-example example-page">
        <am-auto-table title="客户列表">
            <am-table-column title="客户" field="acctName"/>
            <am-table-column title="客户编码" field="acctCode"/>
            <am-table-column title="出生日期" field="birthday"/>
            <am-table-column title="客户类型" field="acctType"/>
            <am-table-column title="所属经销商" field="acctAgency"/>
        </am-auto-table>
    </div>
</template>

<script>
    export default {
        name: "auto-table-example"
    }
</script>
