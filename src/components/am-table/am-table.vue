<template>
    <div class="am-table" :class="classes">
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
            :select-index.sync="selectIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            :row-style-func="rowStyleFunc"
            :cell-style-func="cellStyleFunc"
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
            :select-index.sync="selectIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            :row-style-func="rowStyleFunc"
            :cell-style-func="cellStyleFunc"
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
            :select-index.sync="selectIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            :row-style-func="rowStyleFunc"
            :cell-style-func="cellStyleFunc"
            @scroll="e=>handleContentScroll(e,'right')"
            @mouseenter.native="focusContent = 'right'"/>
    </div>
</template>

<script>
    import AmTableColumnController from './am-table-column-controller';
    import AmTableContent from './am-table-content';
    import {findComponentsDownward} from '../../scripts/dom';

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
                selectIndex: null,
            };
        },
        computed: {
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
                return ret;
            },
        },
        methods: {
            handleContentScroll(e, focusContent) {
                if (focusContent !== (this.dragingScrollbar ? 'center' : this.focusContent)) return;
                if (focusContent === 'center') {
                    this.shadowLeft = (e.target.scrollLeft > 0);
                    this.shadowRight = (e.target.scrollLeft < (e.target.scrollWidth - e.target.offsetWidth + 17));
                    // console.log(e.target.scrollWidth, e.target.offsetWidth, e.target.scrollWidth - e.target.offsetWidth, e.target.scrollLeft)
                }

                if (!!this.$refs.left && this.$refs.left.$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) {
                    this.$refs.left.$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop;
                }
                if (!!this.$refs.center && this.$refs.center.$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) {
                    this.$refs.center.$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop;
                }
                if (!!this.$refs.right && this.$refs.right.$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) {
                    this.$refs.right.$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop;
                }
            },
            handleVerticalIndicatorMousedown() {
                this.dragingScrollbar = true;
            },
            handleVerticalIndicatorMouseup() {
                this.dragingScrollbar = false;
            },
            triggerRowMethod(row, index, methodName) {
                let centerRows = findComponentsDownward(this.$refs.center, 'am-table-row');
                centerRows[index][methodName]();
                if (!!this.$refs.left) {
                    let leftRows = findComponentsDownward(this.$refs.left, 'am-table-row');
                    leftRows[index][methodName]();
                }
                if (!!this.$refs.right) {
                    let rightRows = findComponentsDownward(this.$refs.right, 'am-table-row');
                    rightRows[index][methodName]();
                }
            },
            handleRowClick(row, index) {
                this.triggerRowMethod(row, index, 'click')
            },
            handleRowDblClick(row, index) {
                this.triggerRowMethod(row, index, 'dblClick')
                !!this.editable && (this.triggerRowMethod(row, index, 'edit'))
            },
            cancelEdit(index) {
                console.log('cancelEdit', index)
                if (index != null) {
                    this.triggerRowMethod(null, index, 'cancelEdit')
                } else {
                    let centerRows = findComponentsDownward(this.$refs.center, 'am-table-row');
                    centerRows.forEach(row => row.cancelEdit())
                    if (!!this.$refs.left) {
                        let leftRows = findComponentsDownward(this.$refs.left, 'am-table-row');
                        leftRows.forEach(row => row.cancelEdit())
                    }
                    if (!!this.$refs.right) {
                        let rightRows = findComponentsDownward(this.$refs.right, 'am-table-row');
                        rightRows.forEach(row => row.cancelEdit())
                    }
                }
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
