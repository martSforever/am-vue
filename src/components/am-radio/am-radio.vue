<template>
    <div class="am-radio" :class="classes" :style="styles">
        <div class="am-radio-wrapper">
            <am-icon :icon="activeIcon" class="am-radio-active-icon"/>
            <am-icon :icon="inactiveIcon" class="am-radio-inactive-icon"/>
        </div>
        <span>label for radio</span>
    </div>
</template>

<script>

    import AmIcon from '../am-icon';
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-radio',
        components: {AmIcon},
        props: {
            value: {},
            size: {},
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
                default: 'fas-square'
            },
            activeColor: {type: String,},
            inactiveColor: {type: String},
        },
        computed: {
            classes() {
                return [
                    `am-radio-color-${this.color}`,
                ];
            },
            styles() {
                let styles = {};
                !!this.size && (styles.fontSize = `${this.size}px`);
                return styles;
            },
        },
    };
</script>
