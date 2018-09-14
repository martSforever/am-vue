<template>
    <div class="am-radio" :class="classes" :style="styles" @click="currentValue = !currentValue" v-effect="!!label">
        <div class="am-radio-wrapper">
            <transition name="am-transition-scale" mode="out-in">
                <am-icon :icon="activeIcon" class="am-radio-active-icon" v-if="currentValue" key="active"/>
                <am-icon :icon="inactiveIcon" class="am-radio-inactive-icon" v-if="!currentValue" key="inactive"/>
            </transition>
        </div>
        <span v-if="!!label" :style="labelStyles" class="am-radio-label">{{label}}</span>
    </div>
</template>

<script>

    import AmIcon from '../am-icon';
    import {oneOf} from '../../scripts/utils';
    import Effect from '../../directives/effect';

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
                default: 'fas-check-square'
            },
            inactiveIcon: {
                type: String,
                default: 'far-square'
            },
            activeColor: {type: String,},
            inactiveColor: {type: String},
            label: {type: String},
        },
        computed: {
            classes() {
                return [
                    `am-radio-color-${this.color}`,
                ];
            },
            styles() {
                let styles = {};
                !!this.size && (styles.fontSize = styles.height = `${this.size}px`);

                !!this.inactiveColor && (!this.currentValue) && (styles.color = `${this.inactiveColor} !important`);
                !!this.activeColor && (!!this.currentValue) && (styles.color = `${this.activeColor} !important`);

                return styles;
            },
            labelStyles() {
                let styles = {};
                !!this.size && (styles.fontSize = styles.height = `${this.size / 1.618}px`);
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
            return {
                currentValue: this.value
            };
        },
    };
</script>
