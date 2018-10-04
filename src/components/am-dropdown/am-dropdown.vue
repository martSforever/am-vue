<template>
    <div class="am-dropdown">
        <div class="am-dropdown-reference-wrapper"
             @click="_handleClickReference"
             ref="reference">
            <slot name="reference"></slot>
        </div>
        <am-popover v-model="currentValue"
                    reference-name="reference"
                    parent-name="am-dropdown"
        >
            <slot name="popover"></slot>
        </am-popover>
    </div>
</template>

<script>
    import AmPopover from '../am-popover'

    export default {
        name: "am-dropdown",
        props: {
            value: {type: Boolean, default: false}
        },
        components: {
            AmPopover
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        methods: {
            _handleClickReference() {
                this.currentValue = !this.currentValue
            },
        },
    }
</script>
