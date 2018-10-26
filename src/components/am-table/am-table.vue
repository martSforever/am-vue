<template>
    <div class="am-table" :class="classes" :style="styles">
        <am-table-column-controller
            :columns.sync="columns"
            :head-columns.sync="headColumns">
            <slot></slot>
        </am-table-column-controller>
        <am-table-content
            ref="center"
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :render-columns="renderColumns"
            :list="list"
            :body-row-height="bodyRowHeight"
            content-fixed="center"
            :hover-index.sync="hoverIndex"
            :select-index.sync="currentSelectIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            :row-style-func="rowStyleFunc"
            :cell-style-func="cellStyleFunc"
            :sort-field="sortField"
            :sort-desc="sortDesc"
            @scroll="e=>handleContentScroll(e,'center')"
            @mouseenter.native="focusContent = 'center'"/>

        <am-table-content
            ref="left"
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :render-columns="renderColumns"
            :list="list"
            :body-row-height="bodyRowHeight"
            content-fixed="left"
            :hover-index.sync="hoverIndex"
            :select-index.sync="currentSelectIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            :row-style-func="rowStyleFunc"
            :cell-style-func="cellStyleFunc"
            :sort-field="sortField"
            :sort-desc="sortDesc"
            @scroll="e=>handleContentScroll(e,'left')"
            @mouseenter.native="focusContent = 'left'"/>

        <am-table-content
            ref="right"
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :render-columns="renderColumns"
            :list="list"
            :body-row-height="bodyRowHeight"
            content-fixed="right"
            :hover-index.sync="hoverIndex"
            :select-index.sync="currentSelectIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            :row-style-func="rowStyleFunc"
            :cell-style-func="cellStyleFunc"
            :sort-field="sortField"
            :sort-desc="sortDesc"
            @scroll="e=>handleContentScroll(e,'right')"
            @mouseenter.native="focusContent = 'right'"/>
    </div>
</template>

<script>
    import AmTableColumnController from './am-table-column-controller';
    import AmTableContent from './am-table-content';
    import {findComponentsDownward} from '../../scripts/dom';
    import {removePx} from '../../scripts/utils';

    export default {
        name: 'am-table',
        components: {AmTableContent, AmTableColumnController},
        props: {
            padding: {type: String, default: '0 6px 0 6px'},
            headRowHeight: {type: Number, default: 36},
            bodyRowHeight: {type: Number, default: 36},
            scrollbarSize: {type: Number, default: 6},
            borderSize: {type: Number, default: 0},
            borderColor: {type: String, default: '#ddd'},
            stripe: {type: Boolean, default: true},
            rowStyleFunc: {type: Function,},
            cellStyleFunc: {type: Function,},
            list: {},
            editable: {type: Boolean, default: true},
            rowNum: {type: Number},
            editing: {type: Boolean, default: false},
            selectIndex: {type: Number},
            sortField: {type: String},
            sortDesc: {type: Boolean, default: true},
        },
        watch: {
            editing(val) {
                if (this.currentEditing !== val) this.currentEditing = val;
            },
            currentEditing(val) {
                this.$emit('update:editing', val);
            },
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
                columns: [],
                headColumns: [],
                focusContent: null,
                shadowLeft: false,
                shadowRight: false,
                dragingScrollbar: false,
                hoverIndex: null,
                currentSelectIndex: this.selectIndex,
                currentEditing: this.editing,
                currentSortField: this.sortField,
                currentSortDesc: this.sortDesc,
            };
        },
        computed: {
            styles() {
                const styles = {};
                !!this.rowNum && (styles.height = `${this.headColumns.length * this.headRowHeight + (this.rowNum) * this.bodyRowHeight + 6}px`);
                // console.log(styles)
                return styles;
            },
            classes() {
                return {
                    'am-table-shadow-left': this.shadowLeft,
                    'am-table-shadow-right': this.shadowRight,
                    'am-table-stripe': this.stripe,
                };
            },
            tableHeadHeight() {
                return (this.headRowHeight * this.headColumns.length) + (this.borderSize) * (this.headColumns.length - 1);
            },
            /*获取渲染表头所需要的数据*/
            renderColumns() {
                if (!this.columns || this.columns.length < 1) return [];
                let ret = [];

                /*递归遍历节点，将列数据收集起来，是一个森林结构*/
                function iterate(column) {
                    if (!!column.children && column.children.length > 0) {
                        column.children.forEach((child) => {
                            iterate(child);
                        });
                    } else {
                        ret.push(column);
                    }
                }

                this.columns.forEach((child) => iterate(child));
                this.$emit('render-columns-change', ret);
                return ret;
            },
            tableWidth() {
                this.renderColumns.forEach((ret, col) => {
                    ret += removePx(col.width);
                    return ret;
                }, 0);
            },
        },
        methods: {
            /*basic*/
            handleContentScroll(e, focusContent) {
                if (focusContent !== (this.dragingScrollbar ? 'center' : this.focusContent)) return;
                if (focusContent === 'center') {
                    this.shadowLeft = (e.target.scrollLeft > 0);
                    this.shadowRight = (e.target.scrollLeft < (e.target.scrollWidth - e.target.offsetWidth + 17));
                    // console.log(e.target.scrollWidth, e.target.offsetWidth, e.target.scrollWidth - e.target.offsetWidth, e.target.scrollLeft)
                }
                const target = ['left', 'center', 'right'];
                target.forEach(position => {
                    if (!!this.$refs[position] && this.$refs[position].$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) this.$refs[position].$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop;
                });
            },
            handleVerticalIndicatorMousedown() {
                this.dragingScrollbar = true;
            },
            handleVerticalIndicatorMouseup() {
                this.dragingScrollbar = false;
            },

            /*util*/
            triggerSingleRowMethod(row, index, methodName) {
                const target = ['left', 'center', 'right'];
                target.forEach(position => {
                    if (!this.$refs[position]) return;
                    const rows = this.$refs[position].$refs.body.$refs.rows;
                    rows.sort((a, b) => a.forKey - b.forKey);
                    rows[index][methodName]();
                });
            },
            triggerMultipleRowMethod(row, index, methodName) {
                if (index != null) {
                    this.triggerSingleRowMethod(null, index, methodName);
                } else {
                    const target = ['left', 'center', 'right'];
                    target.forEach(position => {
                        if (!this.$refs[position]) return;
                        let rows = this.$refs[position].$refs.body.$refs.rows;
                        rows.forEach(row => row[methodName]());
                    });
                }
            },

            /*extension*/
            handleRowClick(row, index) {
                this.triggerSingleRowMethod(row, index, 'click');
                this.$emit('click', {row, index});
            },
            handleRowDblClick(row, index) {
                this.triggerSingleRowMethod(row, index, 'dblClick');
                this.$emit('dblclick', {row, index});
            },

            /*methods*/
            getEditingRows() {
                return this.$refs.center.$refs.body.$refs.rows.reduce((ret, rowComponent) => {
                    if (!!rowComponent.currentEditable) ret.push(rowComponent.getEditRowData());
                    return ret;
                }, []);
            },
            cancelEdit(index) {
                this.currentEditing = false;
                this.triggerMultipleRowMethod(null, index, 'cancelEdit');
            },
            saveEdit(index) {
                this.triggerMultipleRowMethod(null, index, 'saveEdit');
            },
            enableEdit(index) {
                this.currentEditing = true;
                index != null && !!this.editable && (this.triggerSingleRowMethod(null, index, 'enableEdit'));
            },
        },
        mounted() {
            this.$refs.center.$refs.body.$refs.scrollbar.$refs.verticalIndicator.addEventListener('mousedown', this.handleVerticalIndicatorMousedown);
            document.addEventListener('mouseup', this.handleVerticalIndicatorMouseup);
        },
        beforeDestroy() {
            this.$refs.center.$refs.body.$refs.scrollbar.$refs.verticalIndicator.removeEventListener('mousedown', this.handleVerticalIndicatorMousedown);
            document.removeEventListener('mouseup', this.handleVerticalIndicatorMouseup);
        },
    };
</script>
