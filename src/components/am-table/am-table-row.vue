<template>
    <tr class="am-table-row">
        <td v-for="(col,colIndex) in renderColumns"
            :key="colIndex">
            <am-table-cell
                :styles="{width:col.width,padding:`${padding}`,height:`${bodyRowHeight}px`}"
                :data="{row,col,rowIndex,colIndex}"
                :text="row[col.field]"
                :render-fcun="col.colRenderFunc"
                :scope-slot-func="col.colScopedSlot"/>
        </td>
    </tr>
</template>

<script>
    import AmTableCell from "./am-table-cell";

    export default {
        name: "am-table-row",
        components: {AmTableCell},
        props: {
            renderColumns: {},
            row: {},
            rowIndex: {},
            padding: {},
            bodyRowHeight: {},
        },
    }
</script>
