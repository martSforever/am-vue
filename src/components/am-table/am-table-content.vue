<template>
    <div class="am-table-content">
        <am-table-head
            :head-columns="headColumns"
        />
    </div>
</template>

<script>
    import AmTableHead from "./am-table-head";

    export default {
        name: "am-table-content",
        components: {AmTableHead},
        props: {
            headColumns: {},
        },
    }
</script>
