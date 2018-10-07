<template>
    <div style="height: 100%;width: 100%">
        {{focusContent}}--{{dragingScrollbar}}
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
                @scroll="e=>handleContentScroll(e,'right')"
                @mouseenter.native="focusContent = 'right'"/>
        </div>
    </div>
</template>

<script>
    import AmTableColumnController from "./am-table-column-controller";
    import AmTableContent from "./am-table-content";

    export default {
        name: "am-table",
        components: {AmTableContent, AmTableColumnController},
        props: {
            padding: {type: String, default: '0 0 0 6px'},
            headRowHeight: {type: Number, default: 36},
            bodyRowHeight: {type: Number, default: 36},
            scrollbarSize: {type: Number, default: 6},
            list: {},
        },
        data() {
            return {
                columns: [],
                headColumns: [],
                focusContent: null,
                shadowLeft: false,
                shadowRight: false,
                dragingScrollbar: false,
            }
        },
        computed: {
            classes() {
                return {
                    'am-table-shadow-left': this.shadowLeft,
                    'am-table-shadow-right': this.shadowRight,
                }
            },
            tableHeadHeight() {
                return 4 + (this.headRowHeight * this.headColumns.length) + 2 * (this.headColumns.length - 1)
            },
            /*获取渲染表头所需要的数据*/
            renderColumns() {
                if (!this.columns || this.columns.length < 1) return []
                let ret = []

                /*递归遍历节点，将列数据收集起来，是一个森林结构*/
                function iterate(column) {
                    if (!!column.children && column.children.length > 0) {
                        column.children.forEach((child) => {
                            iterate(child)
                        })
                    } else {
                        ret.push(column)
                    }
                }

                this.columns.forEach((child) => iterate(child))
                return ret
            },
        },
        methods: {
            handleContentScroll(e, focusContent) {
                if (focusContent !== (this.dragingScrollbar ? 'center' : this.focusContent)) return
                if (focusContent === 'center') {
                    this.shadowLeft = (e.target.scrollLeft > 0)
                    this.shadowRight = (e.target.scrollLeft < (e.target.scrollWidth - e.target.offsetWidth + 17))
                    // console.log(e.target.scrollWidth, e.target.offsetWidth, e.target.scrollWidth - e.target.offsetWidth, e.target.scrollLeft)
                }

                if (!!this.$refs.left && this.$refs.left.$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) {
                    this.$refs.left.$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop
                }
                if (!!this.$refs.center && this.$refs.center.$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) {
                    this.$refs.center.$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop
                }
                if (!!this.$refs.right && this.$refs.right.$refs.body.$refs.scrollbar.$refs.wrapper !== e.target) {
                    this.$refs.right.$refs.body.$refs.scrollbar.$refs.wrapper.scrollTop = e.target.scrollTop
                }
            },
            handleVerticalIndicatorMousedown() {
                this.dragingScrollbar = true
            },
            handleVerticalIndicatorMouseup() {
                this.dragingScrollbar = false
            },
        },
        mounted() {
            this.$refs.center.$refs.body.$refs.scrollbar.$refs.verticalIndicator.addEventListener('mousedown', this.handleVerticalIndicatorMousedown)
            document.addEventListener('mouseup', this.handleVerticalIndicatorMouseup)
        },
        beforeDestroy() {
            this.$refs.center.$refs.body.$refs.scrollbar.$refs.verticalIndicator.removeEventListener('mousedown', this.handleVerticalIndicatorMousedown)
            document.removeEventListener('mouseup', this.handleVerticalIndicatorMouseup)
        },
    }
</script>
