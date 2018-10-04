<template>
    <div class="am-select">
        <am-input ref="input" @click="currentShow = true"/>
        <am-popover
            v-model="currentShow"
            parent-name="am-select"
            reference-name="input"
            :size-equal="true"
        >
            popover content
        </am-popover>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmPopover from '../am-popover'

    export default {
        name: "am-select",
        components: {
            AmInput,
            AmPopover,
        },
        props: {
            data: {type: Array, default: () => []},
            childrenKey: {type: String},
            show: {type: Boolean, default: false},
        },
        watch: {
            show(val) {
                if (this.currentShow !== this.show) this.currentShow = val
            },
            currentShow(val) {
                this.$emit('update:show', val)
            },
        },
        data() {
            return {
                currentShow: this.show
            }
        },
    }
</script>
