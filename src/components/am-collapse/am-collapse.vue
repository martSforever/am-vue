<template>
    <am-collapse-transition>
        <div class="am-collapse" v-show="currentValue">
            <slot></slot>
        </div>
    </am-collapse-transition>
</template>

<script>

    import AmCollapseTransition from './am-collapse-transition'

    export default {
        name: "am-collapse",
        components: {
            AmCollapseTransition
        },
        props: {
            value: {type: Boolean}
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        watch: {
            value(val) {
                if (this.currentValue !== this.value) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
    }
</script>
