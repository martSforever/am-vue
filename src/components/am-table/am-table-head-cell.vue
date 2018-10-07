<template>
    <td :rowspan="col.rowspan"
        :colspan="col.colspan"
        :style="{border:`solid ${borderSize}px ${borderColor}`}"
        class="am-table-head-cell">
        <am-table-cell
            :styles="{width:col.width,padding:`${padding}`,height:`${headRowHeight}px`}"
            :data="{col}"
            :text="col.title"
            :render-fcun="col.titleRenderFunc"
            :scope-slot-func="col.titleScopedSlot"
            :content-fixed="contentFixed"
            :fixed="col.fixed"/>
        <div class="drag-indicator"
             :style="dragIndicatorStyles"
             @mousedown="_handleMouseDown"></div>
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
            contentFixed: {},
            borderSize: {},
            borderColor:{},

        },
        computed: {
            dragIndicatorStyles() {
            },
        },
        methods: {
            _handleMouseDown() {
            },
        },
    }
</script>
