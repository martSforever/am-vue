<template>
    <div class="am-input" :class="classes">
        <div class="am-input-prepend" v-if="!!$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <span class="am-input-prefix-icon" v-if="!!prefixIcon" @click="e=>$emit('click-prefix-icon',e)">
            <am-icon :icon="prefixIcon"/>
        </span>
        <div class="am-input-wrapper">
            <input v-model="currentValue"
                   :placeholder="!!disabled?'':placeholder"
                   :disabled="disabled"
                   @focus="e=>$emit('focus', e)"
                   @blur="e=>$emit('blur', e)"
                   @click="e=>$emit('click', e)"
                   @keyup.enter="e=>$emit('enter', e)"
            />
        </div>
        <div class="am-input-clear-icon" v-show="clearable" @click="currentValue = null">
            <am-icon icon="fas-times"/>
        </div>
        <div class="am-input-suffix-icon" v-if="!!suffixIcon" @click="e=>$emit('click-suffix-icon',e)">
            <am-icon :icon="suffixIcon"/>
        </div>
        <div class="am-input-append" v-if="!!$slots.append">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script>
    import {oneOf} from '../../scripts/utils';
    import AmIcon from '../am-icon';

    export default {
        name: 'am-input',
        components: {
            AmIcon
        },
        props: {
            value: {},
            type: {
                type: String,
                default: 'line',
                validator(val) {
                    return oneOf(val, ['fill', 'line', 'none']);
                },
            },
            color: {
                type: String,
                default: 'info',
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
            dashed: {type: Boolean,},
            long: {type: Boolean,},
            prefixIcon: {type: String},
            suffixIcon: {type: String},
            placeholder: {type: String, default: '点击输入内容...'},
            disabled: {type: Boolean},
            clearable: {type: Boolean},
            regexp: {type: RegExp},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) {
                    this.currentValue = val;
                }
            },
            currentValue(val) {
                if (this.currentValue !== this.value) {
                    this.$emit('input', val);
                    this.$emit('change', val);
                    !!this.regexp && (this._replaceByRegexp());
                }
            },
        },
        data() {
            return {
                currentValue: this.value,
                timer: null,
            };
        },
        computed: {
            classes() {
                return [
                    `am-input-${!!this.dashed ? 'line' : this.type}`,
                    `am-input-color-${this.color}`,
                    `am-input-shape-${this.shape}`,
                    `am-input-size-${this.size}`,
                    {
                        'am-input-long': !!this.long,
                        'am-input-disabled': !!this.disabled,
                        'am-input-dashed': !!this.dashed
                    },
                ];
            },
        },
        methods: {
            _replaceByRegexp() {
                if (!!this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    clearTimeout(this.timer);
                    this.timer = null;
                    this.currentValue = this.currentValue.replace(this.regexp, '');
                    this.$emit('replace-done')
                }, 300);
            },
        },
    };
</script>
