<template>
    <div class="am-dropdown-item" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentUpward} from "../../scripts/dom";

    export default {
        name: "am-dropdown-item",
        data() {
            return {
                dropdown: null
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
                if (!!this.dropdown && !!this.dropdown.hideOnClickItem) {
                    this.dropdown.currentValue = false
                }
            },
        },
        mounted() {
            this.dropdown = findComponentUpward(this, 'am-dropdown')
        },
    }
</script>
