<template>
    <am-table-column class="am-table-column-collapse"
                     ref="column"
                     :title="title"
                     :width.sync="currentWidth"
                     :order="order"
                     :title-render-func="titleRenderFunc"
                     :col-render-func="colRenderFunc"
                     :fixed.sync="currentFixed">

    </am-table-column>
</template>

<script>
    import AmTableColumn from '../../am-table/am-table-column';
    import tableColumnMixin from '../table-column-mixin';

    export default {
        name: 'am-table-column-collapse',
        mixins: {
            tableColumnMixin,
        },
        components: {AmTableColumn},
        props: {
            width: {type: String, default: '32px'},

            confirm: {type: Boolean, default: true},
            singleSelect: {type: Boolean},
            disabled: {type: Boolean},

            color: {type: String, default: 'primary'},
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
                this.items.forEach(item => Vue.set(item.row, this.field, this.currentValue));
            },
            getSelectRow() {
                return this.items.reduce((ret, item) => {
                    if (!!item.row[this.field]) ret.push(item.row);
                    return ret;
                }, []);
            },
            handleChange(val, row, rowIndex) {
                if (!!this.singleSelect) {
                    if (!!val) {
                        if (this.singleIndex != null) {
                            this.items[this.singleIndex].row[this.field] = false;
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
