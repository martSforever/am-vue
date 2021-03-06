<template>
    <div class="am-auto-table">
        <div class="am-auto-table-title" v-if="!!title">{{title}}</div>
        <div class="am-auto-table-content">
            <div class="am-auto-table-header">
                <div class="am-auto-table-header-left-side">
                    <!--设置-->
                    <am-button icon="fas-cog" icon-only size="small" type="fill" v-if="!!settingConfig"/>
                    <!--筛选-->
                    <am-auto-table-filter :search-cols="searchCols" size="small" color="primary" :query-filters="option.param.query.filters"
                                          @confirm="handleFilter"/>
                    <am-button-group size="small" v-show="!!editing">
                        <am-button label="继续添加" color="success" icon="fas-plus-circle" @click="handleClickCreateButton"
                                   v-if="!!multiInsertable && editStatus === 'insert'"/>
                        <am-button label="保存编辑" icon="fas-save" @click="handleClickSaveEditButton"/>
                        <am-button label="取消编辑" color="error" icon="fas-ban" @click="handleClickCancelEditButton"/>
                    </am-button-group>
                    <am-button-group size="small" v-show="!editing">
                        <am-button label="新建" icon="fas-plus-circle" color="success" @click="handleClickCreateButton" v-if="!!insertable"/>
                        <am-button label="删除" icon="fas-minus-circle" color="error" @click="handleClickDeleteButton" v-if="!!deleteable"/>
                    </am-button-group>
                </div>
                <!--操作按钮-->
                <am-button-group size="small">
                    <am-button label="导入" icon="fas-download" v-if="importable"/>
                    <am-button label="导出" icon="fas-upload" v-if="exportable"/>
                    <slot name="normalBtn"></slot>
                </am-button-group>
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
                @clickSort="handleSort"
            >
                <am-table-column-index v-if="indexing" :page="!!option?option.param.query.page:0" :page-size="!!option?option.param.query.pageSize:1"/>
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
    import AmAutoTableFilter from './am-auto-table-filter';
    import AutoTableController from './index';

    const EDIT_STATUS = {
        NORMAL: 'normal',
        INSERT: 'insert',
        UPDATE: 'update',
    };

    export default {
        name: 'am-auto-table',
        components: {AmAutoTableFilter, AmPagination, AmSelect, AmInput, AmButton, AmButtonGroup, AmTableColumnIndex, AmTable},
        props: {
            indexing: {type: Boolean, default: true},
            rowNum: {type: Number, default: 10},
            title: {type: String},
            selectIndex: {type: Number, default: 0},
            option: {type: Object,},
            sortField: {type: String},
            sortDesc: {type: Boolean, default: true},
            settingConfig: {type: Boolean, default: true},

            updateable: {type: Boolean, default: true},
            insertable: {type: Boolean, default: true},
            deleteable: {type: Boolean, default: true},
            multiUpdateable: {type: Boolean},
            multiInsertable: {type: Boolean},
            exportable: {type: Boolean, default: true},
            importable: {type: Boolean, default: true},
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
                newRows: [],
                sortable: {type: Boolean, default: true},
            };
        },
        beforeMount() {
            AutoTableController.add(this);
        },
        beforeDestroy() {
            AutoTableController.remove(this);
        },
        mounted() {
            this.table = this.$refs.table;
        },
        computed: {
            searchCols() {
                if (!this.renderColumns) return [];
                const result = this.renderColumns.reduce((ret, item) => {
                    if (!item.noSearch) ret.push(item);
                    return ret;
                }, [])
                return result;
            },
            list() {
                return this.option.list;
            },
            currentSortField() {
                return this.sortField || !!this.option.param.query.orders[0] ? this.option.param.query.orders[0].field : null;
            },
            currentSortDesc() {
                return this.sortDesc || !!this.option.param.query.orders[0] ? this.option.param.query.orders[0].desc : null;
            },

        },
        methods: {

            /*basic*/
            handleDblClick({row, index}) {
                if (this.editStatus === EDIT_STATUS.INSERT) return;
                if ((this.editStatus === EDIT_STATUS.UPDATE && !this.multiUpdateable)) return;
                if (!this.updateable) return;
                this.table.enableEdit(index);
                this.editStatus = EDIT_STATUS.UPDATE;
            },
            handleClickCancelEditButton() {
                this.cancelEdit();
            },
            handleClickSaveEditButton() {
                this.saveEdit();
            },


            /*extension*/
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
                this.currentSortDesc = col.field === this.currentSortField ? !this.currentSortDesc : true;
                this.currentSortField = col.field;
                const queryOrders = this.option.param.query.orders;
                queryOrders.splice(0, queryOrders.length);
                queryOrders.push({field: this.currentSortField, desc: this.currentSortDesc});
                this.option.reload();
            },
            handleFilter() {
                this.option.reload();
            },

            /*util*/
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

            /*method*/
            refreshRender() {
                this.$refs.table.refreshRender();
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
