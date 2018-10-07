<template>
    <tr class="am-table-row">
        <td v-for="(col,colIndex) in renderColumns"
            style="border: solid 1px transparent"
            :key="colIndex">
            <am-table-cell
                :styles="{width:col.width,padding:`${padding}`,height:`${bodyRowHeight}px`}"
                :data="{row,col,rowIndex,colIndex}"
                :text="row[col.field]"
                :render-fcun="col.colRenderFunc"
                :scope-slot-func="col.colScopedSlot"
                :content-fixed="contentFixed"
                :fixed="col.fixed"/>
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
            contentFixed: {},

        },
    }
</script>
