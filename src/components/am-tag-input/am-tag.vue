<template>
    <am-move-item class="am-tag" :class="classes" @click.native="handleClick">
        <div class="am-tag-default" v-if="!renderFunc && !scopedSlotFunc">
            <span class="am-tag-label">{{label}}</span>
            <am-icon icon="fas-times" v-if="!!deleteable"/>
        </div>
        <div class="am-tag-render" v-if="!!renderFunc">
            <am-rendering-render-func :render-func="renderFunc" :data="{item:proxy}"/>
        </div>
        <div class="am-tag-render" v-if="!!scopedSlotFunc">
            <am-rendering-scope-slot :scope-slot-func="scopedSlotFunc" :data="{item:proxy}"/>
        </div>
    </am-move-item>
</template>

<script>
    import AmMoveItem from '../am-move/am-move-item';
    import AmIcon from '../am-icon';
    import {oneOf} from '../../scripts/utils';
    import AmRenderingRenderFunc from '../am-render/rendering-render-func';
    import AmRenderingScopeSlot from '../am-render/rendering-scope-slot';
    import {MODAL_TYPES} from '../am-modal';

    export default {
        name: 'am-tag',
        components: {
            AmMoveItem,
            AmIcon,
            AmRenderingRenderFunc,
            AmRenderingScopeSlot,
        },
        props: {
            label: {type: String},
            value: {},
            index: {type: Number},
            data:{},
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
            scopedSlotFunc: {type: Function},
        },
        data() {
            let _this = this;
            return {
                proxy: {
                    get label() {
                        return _this.label;
                    },
                    get value() {
                        return _this.value;
                    },
                    get index() {
                        return _this.index;
                    },
                    get color() {
                        return _this.color;
                    },
                    get deleteable() {
                        return _this.deleteable;
                    },
                    get type() {
                        return _this.type;
                    },
                    get shape() {
                        return _this.shape;
                    },
                    get dashed() {
                        return _this.dashed;
                    },
                    get data(){
                        return _this.data
                    },
                }
            };
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
