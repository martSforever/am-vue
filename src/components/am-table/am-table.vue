<template>
    <div class="am-table">
        <am-table-column-controller
            :columns.sync="columns"
            :head-columns.sync="headColumns">
            <slot></slot>
        </am-table-column-controller>

        <am-table-content
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :render-columns="renderColumns"
            :list="list"
            :body-row-height="bodyRowHeight"
            content-fixed="center"/>

        <!--<am-table-content
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :render-columns="renderColumns"
            :list="list"
            :body-row-height="bodyRowHeight"
            content-fixed="left"/>-->
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
            list: {},
        },
        data() {
            return {
                columns: [],
                headColumns: [],
            }
        },
        computed: {
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
    }
</script>
