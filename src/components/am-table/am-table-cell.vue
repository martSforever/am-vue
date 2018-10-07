<template>
    <div class="am-table-cell" :style="styles">
        <rendering-scope-slot v-if="!!scopeSlotFunc" :scope-slot-func="scopeSlotFunc" :data="data"/>
        <rendering-render-func v-else-if="!!renderFcun" :render-func="renderFcun" :data="data"/>
        <span v-else>{{title}}</span>
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
            title: {},
        },
    }
</script>
