<template>
    <am-table-column ref="column"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed">
        <template slot="title" slot-scope="{col,colIndex}">
            <am-radio :value="currentValue" disabled @click="handleClickTitle"/>
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
            />
        </template>
    </am-table-column>
</template>

<script>
    import tableColumnMixin from '../table-column-mixin';
    import AmRadio from '../../am-radio';
    import AmTableColumnCheckItem from './am-table-column-check-item';
    import Vue from 'vue';

    export default {
        name: 'am-table-column-check',
        components: {
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
        },
        data() {
            return {
                items: [],
                currentValue: false,
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
                this.items.forEach(item => Vue.set(item.row, this.field, this.currentValue));
            },
            getSelectRow() {
                return this.items.reduce((ret, item) => {
                    if (!!item.row[this.field]) ret.push(item.row);
                    return ret;
                }, []);
            },
        },
    };
</script>
