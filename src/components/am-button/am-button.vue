<template>
    <button class="am-button"
            v-effect
            :class="[`am-button-${type}`,`am-button-color-${color}`,`am-button-${size}`]">
        <slot></slot>
    </button>
</template>

<script>
    import Effect from '../../directives/effect'
    import {oneOf} from "../../scripts/utils";

    export default {
        name: 'am-button',
        directives: {
            Effect
        },
        props: {
            type: {
                type: String,
                default: 'fill',
                validator(val) {
                    return oneOf(val, ['fill', 'line', 'none']);
                },
            },
            color: {
                type: String,
                default: 'primary',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error', 'none']);
                },
            },
            size: {
                type: String,
                default: 'default',
                validator(val) {
                    return oneOf(val, ['default', 'large', 'small']);
                },
            },
        },
    };
</script>
