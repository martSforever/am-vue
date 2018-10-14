<template>
    <div class="am-auto-table">
        <div class="am-auto-table-title" v-if="!!title">{{title}}-{{currentSelectIndex}}</div>
        <div class="am-auto-table-header">
            <div>
                <am-button icon="fas-cog" icon-only size="small" type="none"/>
                <am-select size="small" suffix-icon="fas-angle-down" placeholder="搜索类型" :width="60" shape="none" type="none" :data="searchFields" show-key="title"/>
                <am-input size="small" suffix-icon="fas-search" shape="none" type="none" placeholder="搜索关键字"/>
                <am-button-group size="small" shape="round" v-show="!editing">
                    <am-button label="新建" icon="fas-plus-circle" color="success" @click="handleClickCreateButton"/>
                    <am-button label="删除" icon="fas-minus-circle" color="error" @click="handleClickDeleteButton"/>
                    <am-button label="导入" icon="fas-download"/>
                    <am-button label="导出" icon="fas-upload"/>
                </am-button-group>
                <am-button-group size="small" shape="round" v-show="!!editing">
                    <am-button label="保存编辑" icon="fas-save" @click="handleClickSaveEditButton"/>
                    <am-button label="取消编辑" color="error" icon="fas-ban" @click="handleClickCancelEditButton"/>
                </am-button-group>
            </div>
        </div>
        <am-table
            ref="table"
            :row-num="rowNum"
            :list="list"
            :editing.sync="editing"
            :before-edit="beforeEdit"
            :before-cancel-edit="beforeCancelEdit"
            :select-index.sync="currentSelectIndex"

            @render-columns-change="val=>renderColumns = val"
        >
            <am-table-column-index v-if="indexing"/>
            <slot></slot>
        </am-table>
        <div class="am-auto-table-footer">
            <div>
                <am-pagination/>
            </div>
        </div>
    </div>
</template>

<script>
    import AmTable from "../am-table/am-table";
    import AmTableColumnIndex from "../am-table-expansion/am-table-column-index";
    import AmButtonGroup from "../am-button/am-button-group";
    import AmButton from "../am-button/am-button";
    import AmInput from "../am-input/am-input";
    import AmSelect from "../am-select/am-select";
    import AmPagination from "../am-pagination/am-pagination";

    const EDIT_STATUS = {
        NORMAL: 'normal',
        CREATE: 'create'
    }

    export default {
        name: "am-auto-table",
        components: {AmPagination, AmSelect, AmInput, AmButton, AmButtonGroup, AmTableColumnIndex, AmTable},
        props: {
            indexing: {type: Boolean, default: true},
            rowNum: {type: Number, default: 10},
            title: {type: String},
            selectIndex: {type: Number, default: 0},
        },
        watch: {
            selectIndex(val) {
                if (this.currentSelectIndex !== val) this.currentSelectIndex = val
            },
            currentSelectIndex(val) {
                this.$emit('update:selectIndex', val)
            },
        },
        data() {
            return {
                renderColumns: null,
                editing: false,
                table: null,
                editStatus: EDIT_STATUS.NORMAL,
                currentSelectIndex: this.selectIndex,
                list: []
            }
        },
        mounted() {
            this.table = this.$refs.table

            /*---------------------------------------testing-------------------------------------------*/
            for (let i = 0; i < 10; i++) {
                this.list.push({acctName: `刘德华${i + 1}`, acctCode: 'SGBVCD', birthday: '2018-10-19', acctType: '大客户', acctAgency: '河南经销商'},)
            }
        },
        computed: {
            searchFields() {
                if (!this.renderColumns) return []
                return this.renderColumns.reduce((ret, item) => {
                    if (!item.noSearch) ret.push(item)
                    return ret
                }, [])
            },
        },
        methods: {
            beforeEdit() {
            },
            beforeCancelEdit() {
            },
            handleClickCancelEditButton() {
                this.cancelEdit();
            },
            handleClickSaveEditButton() {
                this.saveEdit()
            },
            handleClickCreateButton() {
                this.editStatus = EDIT_STATUS.CREATE
                this.list.unshift({})
                this.table.enableEdit(0)
            },
            handleClickDeleteButton() {
                this.$modal.show({
                    title: '确认提示',
                    message: `确认要删除第${this.currentSelectIndex + 1}条记录吗？`,
                    confirmButton: true,
                    cancelButton: true,
                    onConfirm: () => {
                        this.list.splice(this.currentSelectIndex, 1)
                    },
                })
            },


            cancelEdit(val) {
                if (this.editStatus === EDIT_STATUS.CREATE) {
                    this.editStatus = EDIT_STATUS.NORMAL
                    this.list.shift()
                }
                this.table.cancelEdit(val)
            },
            saveEdit(val) {
                this.table.saveEdit(val)
                this.table.cancelEdit(val)
            },

        },
    }
</script>
