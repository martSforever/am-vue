<template>
    <div class="am-switch" :class="classes">
        <am-button label="自动保存：" type="none"/>
        <div class="am-switch-wrapper" @click="_handleClickIndicator">
            <div class="am-switch-indicator-wrapper">
                <div class="am-switch-indicator">
                    <slot name="indicator">
                        渣
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-switch',
        props: {
            value: {},
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
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                currentValue: this.value
            };
        },
        computed: {
            classes() {
                return [
                    `am-switch-size-${this.size}`,
                    `am-switch-color-${this.color}`,
                    `am-switch-${!!this.currentValue ? 'active' : 'inactive'}`,
                    {
                        ['am-switch-disabled']: !!this.disabled,
                    }
                ];
            },
        },
        methods: {
            _handleClickIndicator() {
                this.currentValue = !this.currentValue;
            },
        },
    };
</script>
