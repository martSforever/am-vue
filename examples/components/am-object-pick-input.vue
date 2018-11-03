<template>
    <am-input class="am-object-pick-input"
              suffix-icon="fas-search"
              readonly
              @click="handleClick"
              :value="(!!row&&!!showKey)?row[showKey]:null"

              :type="type"
              :color="color"
              :size="size"
              :shape="shape"
              :dashed="dashed"
              :long="long"
              :prefixIcon="prefixIcon"
              :placeholder="placeholder"
              :disabled="disabled"
              :width="width"
    />
</template>

<script>
    import AmInput from "../../src/components/am-input/am-input";
    import ObjectPick from "./object-pick";
    import {AutoOption} from "../../src/components/am-auto-table/auto-option";
    import {oneOf} from "../../src/scripts/utils";

    export default {
        name: "am-object-pick-input",
        components: {AmInput},
        props: {
            renderFunc: {required: true, type: Function},
            option: {required: true, type: AutoOption},
            singleSelect: {type: Boolean, default: true},

            row: {required: true, type: Object},
            map: {require: true, type: Object},
            showKey: {required: true, type: String},

            onConfirm: {type: Function},
            onCancel: {type: Function},
            onComplete: {type: Function},

            type: {
                type: String, default: 'line', validator(val) {
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
            suffixIcon: {type: String, default: 'fas-calendar-alt'},
            placeholder: {type: String, default: '点击输入内容...'},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            clearable: {type: Boolean},
            regexp: {type: RegExp},
            width: {},
        },
        methods: {
            handleClick() {
                ObjectPick.pick({
                    renderFunc: this.renderFunc,
                    option: this.option,
                    singleSelect: this.singleSelect,

                    onConfirm: this.onConfirm || this.handleConfirm,
                    onCancel: this.onCancel || this.handleCancel,
                    onComplete: this.onComplete || this.handleComplete,
                });
            },
            handleConfirm(data) {
                this.$emit('confirm', data)
                Object.keys(this.map).forEach(key => this.$set(this.row, key, data[this.map[key]]))
            },
            handleCancel() {
                this.$emit('cancel')
            },
            handleComplete() {
                this.$emit('complete')
            },
        }
    }
</script>
