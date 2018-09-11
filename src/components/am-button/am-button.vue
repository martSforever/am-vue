<template>
    <button class="am-button"
            :class="[`am-button-${type}`,`am-button-color-${color}`,`am-button-${size}`]">
        <slot></slot>
    </button>
</template>

<script>
    import {oneOf} from '../../script/utils';

    export default {
        name: 'am-button',
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
