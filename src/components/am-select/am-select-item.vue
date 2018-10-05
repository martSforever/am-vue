<template>
    <div class="am-select-item">
        <am-dropdown
            trigger="click"
            direction="right"
            :disabled="!(!!childrenKey && !!data[childrenKey] && data[childrenKey].length>0)"
        >
            <div class="am-select-item-content"
                 slot="reference">
                <am-rendering-scope-slot :scope-slot-func="scopeSlotFunc" :data="data" v-if="!!scopeSlotFunc"/>
                <am-rendering-render-func :render-func="renderingRenderFunc" :data="data" v-if="!!renderingRenderFunc"/>
            </div>
            <div slot="popover">
                    <am-select-item
                        v-for="(item,index) in data[childrenKey]"
                        :key="index"
                        :scope-slot-func="scopeSlotFunc"
                        :rendering-render-func="renderingRenderFunc"
                        :data="item"
                        :children-key="childrenKey"
                    />
            </div>
        </am-dropdown>
    </div>
</template>

<script>

    import AmRenderingScopeSlot from '../am-render/rendering-scope-slot'
    import AmRenderingRenderFunc from '../am-render/rendering-render-func'
    import AmDropdown from '../am-dropdown'

    export default {
        name: "am-select-item",
        components: {AmRenderingScopeSlot, AmRenderingRenderFunc, AmDropdown},
        props: {
            data: {},
            scopeSlotFunc: {},
            renderingRenderFunc: {},
            childrenKey: {},
        },
        data() {
            return {
                currentValue: false,
            }
        },
    }
</script>
