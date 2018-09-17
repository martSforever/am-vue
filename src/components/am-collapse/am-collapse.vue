<template>
    <div class="am-collapse" :class="{'am-collapse-active':currentValue}">
        <div class="am-collapse-head" @click="currentValue = !currentValue">
            <slot name="head">
                collapse head
            </slot>
            <div class="am-collapse-head-icon-wrapper" v-if="!noIcon">
                <am-icon icon="fas-angle-down" :color="iconColor"/>
            </div>
        </div>
        <am-collapse-transition>
            <div class="am-collapse-body" v-show="currentValue">
                <slot>
                    collapse body
                </slot>
            </div>
        </am-collapse-transition>
    </div>
</template>

<script>

    import AmCollapseTransition from './am-collapse-transition'
    import AmIcon from '../am-icon'

    export default {
        name: "am-collapse",
        components: {
            AmCollapseTransition,
            AmIcon
        },
        props: {
            value: {type: Boolean},
            noIcon: {type: Boolean},
            iconColor: {type: String},
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
