<template>
    <button class="am-button"
            v-effect
            :disabled="disabled"
            :class="classes"
            @click="handleClick">
        <am-icon :icon="icon" v-if="!!icon && iconPosition === 'left'" :loading="iconLoading"
                 class="am-button-icon"/>
        <slot><span class="am-button-label">{{label}}</span></slot>
        <am-icon :icon="icon" v-if="!!icon && iconPosition === 'right'" :loading="iconLoading"
                 class="am-button-icon"/>
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
            dashed: {
                type: Boolean,
            },
            label: {},
            icon: {
                type: String,
            },
            iconLoading: {
                type: Boolean,
            },
            iconPosition: {
                type: String,
                default: 'left',
            },
            iconOnly: {
                type: Boolean,
            },
            long: {
                type: Boolean
            },
            disabled: {
                type: Boolean,
            },
        },
        computed: {
            classes() {
                return [
                    `am-button-${!!this.dashed ? 'line' : this.type}`,
                    `am-button-color-${this.color}`,
                    `am-button-${!!this.groupSize ? this.groupSize : this.size}`,
                    `am-button-shape-${!!this.iconOnly ? 'round ' : this.shape}`,
                    {
                        'am-button-dashed': !!this.dashed,
                        'am-button-long': !!this.long,
                        'am-button-disabled': !!this.disabled,
                        [`am-button-icon-only-${this.size}`]: !!this.iconOnly,
                    }
                ];
            },
            groupSize() {
                return (this.$parent.$options.name === 'am-button-group') ? this.$parent.size : null;
            },
        },
        methods: {
            handleClick(e) {
                if (!this.disabled) this.$emit('click', e);
            },
        },
    };
</script>
