<template>
    <div class="am-tag-input" :class="classes">
        <am-move-container direction="top">
            <am-tag
                v-for="(tag,index) in tags"
                :label="tag[labelKey||'label']"
                :value="tag.value"
                :color="tag[colorKey||'primary']"
                :deleteable="tag.deleteable"
                :type="tag.type"
                :shape="tag.shape"
                :dashed="tag.dashed"
                :renderFunc="renderFunc"
                :key="tag._tagKey"
                :index="index"
                :data="tag"
                @remove="_handleRemove"
                :scoped-slot-func="$scopedSlots.default"
            />
            <input v-model="label"
                   :style="inputStyles"
                   class="am-tag-label-input"
                   key="input"
                   v-if="!notInput && !disabled"
                   @keyup.enter="_handlerConfirm"
                   @keyup.backspace="_handleBakcspace"
            />
        </am-move-container>
    </div>
</template>

<script>
    import AmTag from './am-tag';
    import AmMoveContainer from '../am-move/am-move-container';
    import {uuid} from '../../scripts/utils';
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-tag-input',
        components: {
            AmTag,
            AmMoveContainer
        },
        props: {
            tags: {type: Array, default: () => []},
            labelKey: {type: String, default: 'label'},
            colorKey: {type: String, default: 'primary'},

            type: {
                type: String,
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
                default: true,
            },
            long: {
                type: Boolean
            },
            disabled: {
                type: Boolean,
            },
            notInput: {
                type: Boolean,
            },
            renderFunc: {
                type: Function,
            },
        },
        watch: {
            tags: {
                immediate: true,
                handler(val) {
                    if (!!val) {
                        val.forEach((item, index) => {
                            if (!item._tagKey) {
                                Object.defineProperty(item, '_tagKey', {
                                    enumerable: false,
                                    value: uuid()
                                });
                            }
                        });
                    }
                },
            },
            label(val) {
                if (!!val) {
                    this.inputEmpty = false
                    if (!!this.timer) {
                        clearTimeout(this.timer)
                        this.timer = null
                    }
                } else {
                    this.timer = setTimeout(() => {
                        this.inputEmpty = true
                        this.timer = null
                    }, 300)
                }
            },
        },
        data() {
            return {
                label: '',
                inputEmpty: true,
                timer: null,
            };
        },
        methods: {
            _handleRemove(index) {
                if (!this.disabled) {
                    const tag = this.tags.splice(index, 1);
                    this.$emit('delete', tag)
                }
            },
            _handlerConfirm() {
                !!this.label && this.$emit('confirm', this.label);
                this.label = '';
            },
            _handleBakcspace() {
                if (this.inputEmpty) {
                    this.$emit('backspace')
                }
            },
        },
        computed: {
            classes() {
                return [
                    `am-tag-input-${!!this.type ? this.type : 'line'}`,
                    `am-tag-input-color-${this.color}`,
                    `am-tag-input-${this.size}`,
                    `am-tag-input-shape-${this.shape}`,
                    {
                        'am-tag-input-dashed': !!this.dashed,
                        'am-tag-input-long': !!this.long,
                        'am-tag-input-disabled': !!this.disabled,
                    }
                ];
            },
            inputStyles() {
                let labelLength = this.label.length - 0;
                return {
                    width: `${labelLength < 5 ? 5 : labelLength + 1}em`
                };
            },
        },
    };
</script>
