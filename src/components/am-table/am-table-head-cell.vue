<template>
    <td
        :rowspan="col.rowspan"
        :colspan="col.colspan"
        class="am-table-head-cell">
        <rendering-scope-slot
            v-if="!!col.titleScopedSlot"
            :scope-slot-func="col.titleScopedSlot"
            :data="{col}"/>
        <rendering-render-func
            v-else-if="!!col.titleRenderFunc"
            :render-func="col.titleRenderFunc"
            :data="{col}"/>
        <span v-else>{{col.title}}</span>
    </td>
</template>

<script>
    import RenderingScopeSlot from "../am-render/rendering-scope-slot";
    import RenderingRenderFunc from "../am-render/rendering-render-func";

    export default {
        name: "am-table-head-cell",
        components: {RenderingRenderFunc, RenderingScopeSlot},
        props: {
            col: {},
        },
    }
</script>
