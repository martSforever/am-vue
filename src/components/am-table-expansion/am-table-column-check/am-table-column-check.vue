<template>
    <am-table-column ref="column"
                     :field="field"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed"
                     :filter-component="filterComponent"
                     :no-search="false"
                     :sortable="sortable"
                     :filter-option="filterOption">
        <template slot="title" slot-scope="{col,colIndex}">
            <am-radio :value="currentValue"
                      read-only
                      @click="handleClickTitle"
                      :disabled="!!singleSelect || disabled"
                      :color="color"
            />
        </template>
        <template slot-scope="{row,rowIndex,col,colIndex}">
            <am-table-column-check-item
                :row="row"
                :row-index="rowIndex"
                :col="col"
                :col-index="colIndex"
                :field="field"
                :editable="editable"

                @mounted="handleItemMounted"
                @beforeDestroy="handleItemBeforeDestroyed"
                @change="handleChange"
                :color="color"
            />
        </template>
    </am-table-column>
</template>

<script>
    import tableColumnMixin from '../table-column-mixin';
    import AmRadio from '../../am-radio';
    import AmTableColumnCheckItem from './am-table-column-check-item';
    import AmTableColumn from "../../am-table/am-table-column";

    export default {
        name: 'am-table-column-check',
        components: {
            AmTableColumn,
            AmTableColumnCheckItem,
            AmRadio,
        },
        mixins: [
            tableColumnMixin
        ],
        props: {

            width: {type: String, default: '32px'},

            confirm: {type: Boolean, default: true},
            singleSelect: {type: Boolean},
            disabled: {type: Boolean},

            color: {type: String, default: 'primary'},
            sortable: {default: false},
        },
        data() {
            return {
                items: [],
                currentValue: false,
                singleIndex: null,
            };
        },
        methods: {
            handleItemMounted(item) {
                this.items.push(item);
            },
            handleItemBeforeDestroyed(item) {
                this.items.splice(this.items.indexOf(item), 1);
            },
            handleClickTitle() {
                if (!!this.singleSelect || !!this.disabled) return;
                if (!!this.confirm)
                    this.$modal.show({
                        confirmButton: true,
                        cancelButton: true,
                        message: !!this.currentValue ? '确认要取消选中所有行吗？' : '确认要选中所有行嘛',
                        onConfirm: this.confirmClickTitle
                    });
                else this.confirmClickTitle();
            },
            confirmClickTitle() {
                this.currentValue = !this.currentValue;
                this.items.forEach(item => item.save(this.currentValue));
            },
            getSelectRow() {
                return this.items.reduce((ret, item) => {
                    if (!!item.currentValue) ret.push(item.row);
                    return ret;
                }, []);
            },
            handleChange(val, row, rowIndex) {
                if (!!this.singleSelect) {
                    if (!!val) {
                        if (this.singleIndex != null) {
                            this.items[this.singleIndex].currentValue = false;
                        }
                        this.singleIndex = rowIndex;
                    } else {
                        this.singleIndex = null;
                    }
                }
            },
        },
    };
</script>
