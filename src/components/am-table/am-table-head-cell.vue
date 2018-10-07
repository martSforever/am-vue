<template>
    <td
        :rowspan="col.rowspan"
        :colspan="col.colspan"
        class="am-table-head-cell">
        <am-table-cell
            :styles="{width:col.width,padding:`${padding}`,height:`${headRowHeight}px`}"
            :data="{col}"
            :text="col.title"
            :render-fcun="col.titleRenderFunc"
            :scope-slot-func="col.titleScopedSlot"/>
    </td>
</template>

<script>
    import RenderingScopeSlot from "../am-render/rendering-scope-slot";
    import RenderingRenderFunc from "../am-render/rendering-render-func";
    import AmTableCell from "./am-table-cell";

    export default {
        name: "am-table-head-cell",
        components: {AmTableCell, RenderingRenderFunc, RenderingScopeSlot},
        props: {
            col: {},
            padding: {},
            headRowHeight: {},

        },
    }
</script>
