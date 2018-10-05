<template>
    <div class="am-select">
        <am-input ref="input"
                  @click="currentShow = true"
                  v-model="currentValue"
        />
        <am-popover
            v-model="currentShow"
            parent-name="am-select"
            reference-name="input"
            :size-equal="true"
        >
            <am-select-item v-for="(item,index) in data"
                            :key="index"
                            :data="item"
                            :scope-slot-func="$scopedSlots.default"
                            :rendering-render-func="renderFunc"
                            :children-key="childrenKey"
            />
        </am-popover>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmPopover from '../am-popover'
    import AmSelectItem from './am-select-item'

    export default {
        name: "am-select",
        components: {
            AmInput,
            AmPopover,
            AmSelectItem,
        },
        props: {
            value: {},
            data: {type: Array, default: () => []},
            childrenKey: {type: String},
            show: {type: Boolean, default: false},
            renderFunc: {type: Function},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
            show(val) {
                if (this.currentShow !== val) this.currentShow = val
            },
            currentShow(val) {
                this.$emit('update:show', val)
            },
        },
        data() {
            return {
                currentShow: this.show,
                currentValue: this.value,
            }
        },
    }
</script>
