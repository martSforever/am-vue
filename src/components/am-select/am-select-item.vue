<template>
    <div class="am-select-item">
        <!--<div class="am-select-item-content"
             @click="currentValue = !currentValue"
             ref="reference">
            <am-rendering-scope-slot :scope-slot-func="scopeSlotFunc" :data="data" v-if="!!scopeSlotFunc"/>
            <am-rendering-render-func :render-func="renderingRenderFunc" :data="data" v-if="!!renderingRenderFunc"/>
        </div>
        <am-popover parent-name="am-select-item"
                    reference-name="reference"
                    direction="right"
                    v-model="currentValue"
        >
            <div style="width: 50px;height: 50px">
                <am-select-item
                    v-for="(item,index) in data[childrenKey]"
                    :key="index"
                    :scope-slot-func="scopeSlotFunc"
                    :rendering-render-func="renderingRenderFunc"
                    :data="item"
                    :children-key="childrenKey"
                />
            </div>
        </am-popover>-->

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
    }
</script>
