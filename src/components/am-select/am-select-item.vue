<template>
    <div class="am-select-item">
        <am-dropdown
            ref="dropdown"
            trigger="hover"
            direction="right"
            :disabled="!(!!childrenKey && !!data[childrenKey] && data[childrenKey].length>0)"
            :scrollbar="false"
        >
            <div class="am-select-item-content"
                 slot="reference">
                <am-rendering-scope-slot :scope-slot-func="scopeSlotFunc" :data="data" v-if="!!scopeSlotFunc"/>
                <am-rendering-render-func :render-func="renderingRenderFunc" :data="data" v-if="!!renderingRenderFunc"/>
            </div>
            <div slot="popover"
                 @mouseenter="handleMouseEnter"
            >
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
    import AmPopover from '../am-popover'

    export default {
        name: "am-select-item",
        components: {
            AmRenderingScopeSlot,
            AmRenderingRenderFunc,
            AmDropdown,
            AmPopover,
        },
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
        methods: {
            handleMouseEnter() {
                this.$nextTick(() => {
                    clearTimeout(this.$refs.dropdown.popoverTimer)
                    this.$refs.dropdown.popoverTimer = null
                })
            },
        },
    }
</script>
