<template>
    <div class="am-radio" :class="classes" :style="styles" @click="_handleClick" v-effect="!!label">
        <div class="am-radio-wrapper">
            <transition-group name="am-transition-scale" mode="in-out">
                <div class="am-radio-active-icon" v-if="currentValue" key="active">
                    <slot name="active">
                        <am-icon :icon="radioActiveIcon"/>
                    </slot>
                </div>
                <div class="am-radio-inactive-icon" v-if="!currentValue" key="inactive">
                    <slot name="inactive">
                        <am-icon :icon="radioInactiveIcon"/>
                    </slot>
                </div>
            </transition-group>
        </div>
        <span v-if="!!label" :style="labelStyles" class="am-radio-label">{{label}}</span>
    </div>
</template>

<script>

    import AmIcon from '../am-icon';
    import {oneOf, removeFromArray} from '../../scripts/utils';
    import Effect from '../../directives/effect';
    import {findComponentUpward} from '../../scripts/dom';

    export default {
        name: 'am-radio',
        components: {AmIcon},
        directives: {Effect},
        props: {
            value: {},
            size: {default: 28},
            color: {
                type: String,
                default: 'primary',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error', 'none']);
                },
            },
            activeIcon: {
                type: String,
            },
            inactiveIcon: {
                type: String,
            },
            activeColor: {type: String,},
            inactiveColor: {type: String},
            label: {type: String},
            radioKey: {type: [String, Number]},
            disabled: {type: Boolean, default: false},
        },
        computed: {
            radioSize() {
                return (!!this.radioGroup && !!this.radioGroup.size) ? this.radioGroup.size : this.size;
            },
            radioColor() {
                return (!!this.radioGroup && !!this.radioGroup.color) ? this.radioGroup.color : this.color;
            },
            radioActiveIcon() {
                if (!this.radioGroup) return this.activeIcon || 'fas-check-square';
                else {
                    return this.radioGroup.activeIcon || this.activeIcon || (!!this.radioGroup.multiple ? 'fas-check-square' : 'fas-check-circle');
                }
            },
            radioInactiveIcon() {
                if (!this.radioGroup) return this.inactiveIcon || 'fas-square';
                else {
                    return this.radioGroup.inactiveIcon || this.inactiveIcon || (!!this.radioGroup.multiple ? 'far-square' : 'far-circle');
                }
            },
            radioActiveColor() {
                return (!!this.radioGroup && !!this.radioGroup.activeColor) ? this.radioGroup.activeColor : this.activeColor;
            },
            radioInactiveColor() {
                return (!!this.radioGroup && !!this.radioGroup.inactiveColor) ? this.radioGroup.inactiveColor : this.inactiveColor;
            },

            classes() {
                return [
                    `am-radio-color-${this.radioColor}`,
                ];
            },
            styles() {
                let styles = {};
                !!this.radioSize && (styles.fontSize = styles.height = `${this.radioSize}px`);

                !!this.radioInactiveColor && (!this.currentValue) && (styles.color = `${this.radioInactiveColor} !important`);
                !!this.radioActiveColor && (!!this.currentValue) && (styles.color = `${this.radioActiveColor} !important`);

                return styles;
            },
            labelStyles() {
                let styles = {};
                !!this.radioSize && (styles.fontSize = styles.height = `${this.radioSize / 1.618}px`);
                return styles;
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
            let radioGroup = findComponentUpward(this, 'am-radio-group');
            return {
                currentValue: this.value,
                radioGroup,
            };
        },
        methods: {
            _handleClick() {
                if (!!this.disabled) return
                this.currentValue = !this.currentValue;
                this.$emit('change', this.currentValue)

                if (!!this.radioGroup) {
                    if (!this.radioGroup.multiple) {
                        this.radioGroup.radios.forEach(radio => {
                            if (radio !== this) radio.currentValue = false;
                        });
                        this.radioGroup.singleValue = !!this.currentValue ? this.radioKey : null;
                    } else {
                        if (!!this.currentValue) this.radioGroup.multipleValue.push(this.radioKey);
                        else removeFromArray(this.radioGroup.multipleValue, this.radioKey);
                    }
                }
            },
        },
        mounted() {
            !!this.radioGroup && (this.radioGroup.addRadio(this));
            if (!!this.radioGroup) {
                if (!!this.radioGroup.multiple) {
                    if (!this.radioKey) {
                        console.error(`radio must have radio-key when radio-group's multiple is true!`);
                        return;
                    }
                    this.currentValue = oneOf(this.radioKey, this.radioGroup.multipleValue);
                } else {
                    this.currentValue = this.radioGroup.singleValue === this.radioKey;
                }
            }
        },
        destroyed() {
            !!this.radioGroup && (this.radioGroup.removeRadio(this));
        },
    };
</script>
