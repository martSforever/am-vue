<template>
    <button class="am-button"
            v-effect
            :class="classes">
        <slot></slot>
    </button>
</template>

<script>
    import Effect from '../../directives/effect';
    import {oneOf} from '../../scripts/utils';

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
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'round', 'none']);
                },
            },
        },
        computed: {
            classes() {
                return [
                    `am-button-${this.type}`,
                    `am-button-color-${this.color}`,
                    `am-button-${this.size}`,
                    `am-button-${this.shape}`,
                ];
            },
        },
    };
</script>
