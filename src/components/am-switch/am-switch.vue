<template>
    <div class="am-switch" :class="classes">
        <am-button label="自动保存：" type="none"/>
        <div class="am-switch-wrapper">
            <div class="am-switch-indicator-wrapper">
                <slot name="indicator">
                    <span class="am-switch-indicator"></span>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-switch',
        props: {
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
            disabled: {
                type: Boolean,
            },
        },
        computed: {
            classes() {
                return [
                    `am-switch-size-${this.size}`,
                    `am-switch-color-${this.color}`,
                    {
                        ['am-switch-disabled']: !!this.disabled,
                    }
                ];
            },
        },
    };
</script>
