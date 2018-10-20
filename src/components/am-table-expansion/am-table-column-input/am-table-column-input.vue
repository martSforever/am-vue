<template>
    <am-table-column ref="column"
                     :field="field"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed"
                     :no-search="false">
        <template slot-scope="{row,rowIndex,col,colIndex}">
            <am-table-column-input-item
                :row="row"
                :row-index="rowIndex"
                :col="col"
                :col-index="colIndex"
                :field="field"
                :editable="editable"

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
        </template>
    </am-table-column>
</template>

<script>
    import tableColumnMixin from '../table-column-mixin';
    import AmTableColumnInputItem from './am-table-column-input-item';
    import {oneOf} from '../../../scripts/utils';

    export default {
        name: 'am-table-column-input',
        components: {AmTableColumnInputItem},
        mixins: [
            tableColumnMixin
        ],
        props: {
            type: {
                type: String,
                default: 'fill',
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
                default: 'small',
                validator(val) {
                    return oneOf(val, ['default', 'large', 'small']);
                },
            },
            shape: {
                type: String,
                default: 'none',
                validator(val) {
                    return oneOf(val, ['fillet', 'round', 'none']);
                },
            },
            dashed: {type: Boolean,},
            long: {type: Boolean, default: true},
            prefixIcon: {type: String},
            suffixIcon: {type: String, default: 'fas-pencil-alt'},
            placeholder: {type: String, default: '点击输入内容...'},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            clearable: {type: Boolean},
            regexp: {type: RegExp},
        },
    };
</script>
