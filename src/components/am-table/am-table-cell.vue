<template>
    <div class="am-table-cell" :style="styles">
        <rendering-scope-slot v-if="!!scopeSlotFunc" :scope-slot-func="scopeSlotFunc" :data="data"/>
        <rendering-render-func v-else-if="!!renderFcun" :render-func="renderFcun" :data="data"/>
        <div v-else class="am-table-cell-default-text">{{text}}</div>
    </div>
</template>

<script>
    import RenderingScopeSlot from "../am-render/rendering-scope-slot";
    import RenderingRenderFunc from "../am-render/rendering-render-func";

    export default {
        name: "am-table-cell",
        components: {RenderingRenderFunc, RenderingScopeSlot},
        props: {
            styles: {},
            scopeSlotFunc: {},
            renderFcun: {},
            data: {},
            text: {},
        },
    }
</script>
