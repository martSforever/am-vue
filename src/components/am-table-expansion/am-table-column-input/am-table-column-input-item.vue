<template>
    <keep-alive>
        <am-input v-model="currentValue"
                  v-if="!!editable && !!currentEditable"

                  :type="type"
                  :color="color"
                  :size="size"
                  :shape="shape"
                  :dashed="dashed"
                  :long="long"
                  :prefixIcon="prefixIcon"
                  :suffixIcon="suffixIcon"
                  :placeholder="placeholder"
                  :disabled="disabled"
                  :readonly="readonly"
                  :clearable="clearable"
                  :regexp="regexp"
        />
        <span v-else>{{row[field]}}</span>
    </keep-alive>
</template>

<script>
    import tableEditItemMixin from "../table-edit-item-mixin";
    import AmInput from "../../am-input/am-input";
    import {oneOf} from "../../../scripts/utils";

    export default {
        name: "am-table-column-input-item",
        components: {AmInput},
        mixins: [
            tableEditItemMixin
        ],
        props: {
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
        },
    }
</script>
