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
                 @click="handleClick"
                 @mouseenter="handleEnterContent"
                 slot="reference">
                <am-rendering-scope-slot :scope-slot-func="scopeSlotFunc" :data="data" v-if="!!scopeSlotFunc"/>
                <am-rendering-render-func :render-func="renderingRenderFunc" :data="data" v-else-if="!!renderingRenderFunc"/>
                <span v-else-if="!!showKey">{{data[showKey]}}</span>
            </div>
            <div slot="popover"
                 @mouseenter="handleMouseEnter">
                <am-select-item
                    v-for="(item,index) in data[childrenKey]"
                    :key="index"
                    :scope-slot-func="scopeSlotFunc"
                    :rendering-render-func="renderingRenderFunc"
                    :data="item"
                    :children-key="childrenKey"
                    show-key="showKey"
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
    import {findComponentUpward} from "../../scripts/dom";

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
            showKey: {type: String},

        },
        data() {
            return {
                currentValue: false,
                dropdown: null,
            }
        },
        mounted() {
            this.dropdown = this.$refs.dropdown
        },
        methods: {
            handleMouseEnter() {
                this.$nextTick(() => {
                    clearTimeout(this.dropdown.popoverTimer)
                    this.dropdown.popoverTimer = null
                })
            },
            handleClick() {
                let result = []
                result.unshift(this.data)
                this.dropdown.referenceHover = false
                this.dropdown.popoverHover = false
                let parent = findComponentUpward(this, 'am-select-item')
                while (parent != null) {
                    result.unshift(parent.data)
                    parent.dropdown.referenceHover = false
                    parent.dropdown.popoverHover = false
                    parent = findComponentUpward(parent, 'am-select-item')
                }
                let root = findComponentUpward(this, 'am-select')
                if (!!root) {
                    root.$emit('select', result)
                    root.currentShow = false
                }
            },
            handleEnterContent() {
                setTimeout(() => {
                    const dropdown = findComponentUpward(this, 'am-dropdown')
                    dropdown.popoverHover = true
                    dropdown.referenceHover = true
                    clearTimeout(dropdown.popoverTimer)
                    clearTimeout(dropdown.referenceTimer)
                    dropdown.popoverTimer = null
                    dropdown.referenceTimer = null
                }, 50)

            },
        },
    }
</script>
