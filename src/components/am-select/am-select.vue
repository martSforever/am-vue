<template>
    <div class="am-select">
        <am-dropdown trigger="click" :size-equal="sizeEqual" v-model="currentShow" :width="dropdownWidth" :height="height">
            <am-input slot="reference"
                      @click="currentShow = true"
                      v-model="currentValue"

                      :type="type"
                      :color="color"
                      :size="size"
                      :shape="shape"
                      :dashed="dashed"
                      :long="long"
                      :prefix-icon="prefixIcon"
                      :suffix-icon="selectSuffixIcon"
                      :placeholder="placeholder"
                      :disabled="disabled"
                      :readonly="readonly"
                      :clearable="clearable"
                      :width="width"
                      :regexp="regexp">
                <slot name="prepend" slot="prepend"></slot>
                <slot name="append" slot="append"></slot>
            </am-input>
            <div slot="popover">
                <am-select-item v-for="(item,index) in data"
                                :key="index"
                                :data="item"
                                :scope-slot-func="$scopedSlots.default"
                                :rendering-render-func="renderFunc"
                                :children-key="childrenKey"
                                :show-key="showKey"
                />
            </div>
        </am-dropdown>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmPopover from '../am-popover'
    import AmDropdown from '../am-dropdown'
    import AmSelectItem from './am-select-item'
    import {oneOf} from "../../scripts/utils";

    export default {
        name: "am-select",
        components: {
            AmInput,
            AmPopover,
            AmSelectItem,
            AmDropdown,
        },
        props: {
            value: {},
            data: {type: Array, default: () => []},
            childrenKey: {type: String},
            show: {type: Boolean, default: false},
            renderFunc: {type: Function},
            showKey: {type: String},

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
            readonly: {type: Boolean},
            clearable: {type: Boolean},
            regexp: {type: RegExp},
            width: {type: Number},
            height: {type: Number},
            sizeEqual: {type: Boolean},
            dropdownWidth: {default: '100px'},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
            show(val) {
                if (this.currentShow !== val) this.currentShow = val
            },
            currentShow(val) {
                this.$emit('update:show', val)
            },
        },
        data() {
            return {
                currentShow: this.show,
                currentValue: this.value,
            }
        },
        mounted() {
            this.$on('select', (result) => {
                this.currentValue = result.reduce((ret, item) => {
                    ret.push(!!this.showKey ? item[this.showKey] : item)
                    return ret
                }, []).join(',')
            })
        },
        computed: {
            selectSuffixIcon() {
                return this.currentShow ? 'fas-angle-up' : 'fas-angle-down'
            }
        },
    }
</script>
