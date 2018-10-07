<template>
    <div class="am-table-content">
        <am-table-head
            :head-columns="headColumns"
            :padding="padding"
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
            padding: {},
        },
    }
</script>
