<template>
    <div class="am-table-head">
        <table>
            <tr v-for="(row,rowIndex) in headColumns"
                :key="rowIndex">
                <am-table-head-cell
                    v-for="(col,colIndex) in row"
                    :key="colIndex"
                    :padding="padding"
                    :col="col"/>
            </tr>
        </table>
    </div>
</template>

<script>
    import AmTableHeadCell from "./am-table-head-cell";

    export default {
        name: "am-table-head",
        components: {AmTableHeadCell},
        props: {
            headColumns: {},
            padding: {},

        },
    }
</script>
