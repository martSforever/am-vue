<template>
    <div class="am-auto-table">
        <div class="am-auto-table-title" v-if="!!title">{{title}}-{{option.count}}</div>
        <div class="am-auto-table-header">
            <div>
                <!--设置-->
                <am-button icon="fas-cog" icon-only size="small" type="none"/>
                <!--筛选-->
                <am-select size="small" suffix-icon="fas-angle-down" placeholder="搜索类型" :width="60" shape="none" type="none" :data="searchFields"
                           show-key="title"/>
                <am-input size="small" suffix-icon="fas-search" shape="none" type="none" placeholder="搜索关键字"/>
                <am-button-group size="small" shape="round" v-show="!editing">
                    <am-button label="新建" icon="fas-plus-circle" color="success" @click="handleClickCreateButton"/>
                    <am-button label="删除" icon="fas-minus-circle" color="error" @click="handleClickDeleteButton"/>
                </am-button-group>
                <!--操作按钮-->
                <am-button-group size="small" shape="round" v-show="!!editing">
                    <am-button label="继续添加" color="success" icon="fas-plus-circle" @click="handleClickCreateButton"
                               v-if="!!multiInsertable && editStatus === 'insert'"/>
                    <am-button label="保存编辑" icon="fas-save" @click="handleClickSaveEditButton"/>
                    <am-button label="取消编辑" color="error" icon="fas-ban" @click="handleClickCancelEditButton"/>
                </am-button-group>
                <am-button-group size="small" shape="round">
                    <am-button label="导入" icon="fas-download"/>
                    <am-button label="导出" icon="fas-upload"/>
                    <slot name="normalBtn"></slot>
                </am-button-group>

            </div>
        </div>
        <am-table
            ref="table"
            :row-num="rowNum"
            :list="list"
            :editing.sync="editing"
            :select-index.sync="currentSelectIndex"
            :sort-field="currentSortField"
            :sort-desc="currentSortDesc"

            @render-columns-change="val=>renderColumns = val"
            @dblclick="handleDblClick"
            @clickTitle="handleClickTitle"
        >
            <am-table-column-index v-if="indexing"/>
            <slot></slot>
        </am-table>
        <div class="am-auto-table-footer">
            <div>
                <am-pagination :page.sync="option.param.query.page"
                               :page-size.sync="option.param.query.pageSize"
                               :total-size="option.count"
                               @load="option.load()"
                               @refresh="option.load()"/>
            </div>
        </div>
    </div>
</template>

<script>
    import AmTable from '../am-table/am-table';
    import AmTableColumnIndex from '../am-table-expansion/am-table-column-index';
    import AmButtonGroup from '../am-button/am-button-group';
    import AmButton from '../am-button/am-button';
    import AmInput from '../am-input/am-input';
    import AmSelect from '../am-select/am-select';
    import AmPagination from '../am-pagination/am-pagination';

    const EDIT_STATUS = {
        NORMAL: 'normal',
        INSERT: 'insert',
        UPDATE: 'update',
    };

    export default {
        name: 'am-auto-table',
        components: {AmPagination, AmSelect, AmInput, AmButton, AmButtonGroup, AmTableColumnIndex, AmTable},
        props: {
            indexing: {type: Boolean, default: true},
            rowNum: {type: Number, default: 10},
            title: {type: String},
            selectIndex: {type: Number, default: 0},
            option: {type: Object,},
            sortField: {type: String},
            sortDesc: {type: Boolean, default: true},

            multiUpdateable: {type: Boolean},
            multiInsertable: {type: Boolean},
        },
        watch: {
            selectIndex(val) {
                if (this.currentSelectIndex !== val) this.currentSelectIndex = val;
            },
            currentSelectIndex(val) {
                this.$emit('update:selectIndex', val);
            },
            sortField(val) {
                if (this.currentSortField !== val) this.currentSortField = val;
            },
            currentSortField(val) {
                this.$emit('update:sortField', val);
            },
            sortDesc(val) {
                if (this.currentSortDesc !== val) this.currentSortDesc = val;
            },
            currentSortDesc(val) {
                this.$emit('update:sortDesc', val);
            },
        },
        data() {
            return {
                renderColumns: null,
                editing: false,
                table: null,
                editStatus: EDIT_STATUS.NORMAL,
                currentSelectIndex: this.selectIndex,
                list: this.option.list,
                newRows: [],
                sortable: {type: Boolean, default: true},
                currentSortField: this.sortField || this.option.param.query.orders[0].field,
                currentSortDesc: this.sortDesc || this.option.param.query.orders[0].desc,
            };
        },
        mounted() {
            this.table = this.$refs.table;
        },
        computed: {
            searchFields() {
                if (!this.renderColumns) return [];
                return this.renderColumns.reduce((ret, item) => {
                    if (!item.noSearch) ret.push(item);
                    return ret;
                }, []);
            },
        },
        methods: {
            handleClickTitle(col) {
                this.handleSort(col)
            },
            handleDblClick({row, index}) {
                if ((!this.multiUpdateable && this.editStatus === EDIT_STATUS.UPDATE)) return;
                else {
                    this.table.enableEdit(index);
                    this.editStatus = EDIT_STATUS.UPDATE;
                }
            },
            handleClickCancelEditButton() {
                this.cancelEdit();
            },
            handleClickSaveEditButton() {
                this.saveEdit();
            },
            handleClickCreateButton() {
                this.editStatus = EDIT_STATUS.INSERT;
                const newRow = {};
                this.newRows.unshift(newRow);
                newRow._key = -this.newRows.length;
                this.list.unshift(newRow);
                this.$nextTick(() => this.table.enableEdit(0));
            },
            handleClickDeleteButton() {
                this.$modal.show({
                    title: '确认提示',
                    message: `确认要删除第${this.currentSelectIndex + 1}条记录吗？`,
                    confirmButton: true,
                    cancelButton: true,
                    onConfirm: () => {
                        this.option.delete(this.list[this.currentSelectIndex], () => this.list.splice(this.currentSelectIndex, 1));
                    },
                });
            },
            handleSort(col) {
                this.currentSortDesc = col.field === this.currentSortField ? !this.currentSortDesc : true
                this.currentSortField = col.field
                const queryOrders = this.option.param.query.orders;
                queryOrders.splice(0, queryOrders.length)
                queryOrders.push({field: this.currentSortField, desc: this.currentSortDesc})
                this.option.reload()
            },
            getSaveOption(rows) {
                switch (this.editStatus) {
                    case EDIT_STATUS.INSERT:
                        return {operate: this.multiInsertable ? 'multiInsert' : 'insert', data: this.multiInsertable ? rows : rows[0]};
                    case EDIT_STATUS.UPDATE:
                        return {operate: this.multiInsertable ? 'multiUpdate' : 'update', data: this.multiInsertable ? rows : rows[0]};
                    default:
                        return null;
                }
            },

            cancelEdit(val) {
                if (this.editStatus === EDIT_STATUS.INSERT) {
                    this.newRows.forEach(() => this.list.shift());
                    this.newRows.splice(0, this.newRows.length);
                }
                this.editStatus = EDIT_STATUS.NORMAL;
                this.table.cancelEdit(val);
            },
            saveEdit(val) {
                const rows = this.table.getEditingRows();
                const saveOption = this.getSaveOption(rows);
                this.option[saveOption.operate](saveOption.data, () => {
                    this.table.saveEdit(val);
                    this.table.cancelEdit(val);
                    this.editStatus = EDIT_STATUS.NORMAL;
                });
            },

        },
    };
</script>
