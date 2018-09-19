<template>
    <am-move-item class="am-tag" :class="classes" @click.native="handleClick">
        <div class="am-tag-default" v-if="!renderFunc">
            <span class="am-tag-label">{{label}}</span>
            <am-icon icon="fas-times" v-if="!!deleteable"/>
        </div>
        <div class="am-tag-render" v-if="!!renderFunc">
            <am-rendering-render-func :render-func="renderFunc"/>
        </div>
    </am-move-item>
</template>

<script>
    import AmMoveItem from '../am-move/am-move-item';
    import AmIcon from '../am-icon';
    import {oneOf} from '../../scripts/utils';
    import AmRenderingRenderFunc from '../am-render/rendering-render-func';
    import {MODAL_TYPES} from '../am-modal';

    export default {
        name: 'am-tag',
        components: {
            AmMoveItem,
            AmIcon,
            AmRenderingRenderFunc,
        },
        props: {
            label: {type: String},
            value: {},
            index: {type: Number},
            color: {
                type: String,
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error', 'none']);
                },
            },
            deleteable: {type: Boolean, default: true},
            type: {
                type: String,
                default: 'fill',
                validator(val) {
                    return oneOf(val, ['fill', 'line', 'none']);
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
            renderFunc: {type: Function},
        },
        computed: {
            classes() {
                return [
                    `am-tag-${!!this.dashed ? 'line' : this.type}`,
                    `am-tag-color-${this.targetColor}`,
                    `am-tag-shape-${this.shape}`,
                    {
                        'am-tag-dashed': !!this.dashed,
                        'am-tag-disabled': !!this.disabled,
                    }
                ];
            },
            targetColor() {
                if (!this.color) {
                    let colors = Object.keys(MODAL_TYPES);
                    return colors[_.random(0, colors.length - 1)];
                } else {
                    return this.color;
                }
            },
        },
        methods: {
            handleClick(e) {
                if (!!this.deleteable) {
                    this.$emit('remove', this.index);
                }
            },
        },
    };
</script>
