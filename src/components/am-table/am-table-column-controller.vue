<template>
    <span class="am-table-column-controller"><slot></slot></span>
</template>

<script>
    export default {
        name: "am-table-column-controller",
        props: {
            columns: {type: Array, desc: '最原始的table column组件的数据，这里是一个组数，每个对象是一个深林结构，保存多级表头的关系',},
            headColumns: {type: Array, desc: '用来渲染表头的column，headColumns数组的长度为表头的层数',},
        },
        watch: {
            currentColumns(val) {
                this.$emit('update:columns', val)
            },
            currentHeadColumns(val) {
                this.$emit('update:headColumns', val)
            },
        },
        data() {
            return {
                currentColumns: this.columns,                               //原始的列信息
                currentHeadColumns: this.headColumns,                       //渲染表头的columns数组
                maxLevel: 0,                                                //表头最大层数
            }
        },
        methods: {
            collectColumns() {
                /*---------------------------------------获取所有column的参数-------------------------------------------*/
                let currentColumns = this.$children.reduce((ret, child) => {
                    (!!child.isTableColumn) && ret.push(child.column)
                    return ret
                }, [])
                /*---------------------------------------计算column的rowSpan以及colSpan，以实现多级表头-------------------------------------------*/
                /*最大层数*/
                let maxLevel = 1;
                /*遍历，计算每个节点的level，以及计算最大level*/
                (function calcLevel(currentColumns, level) {
                    if (!!currentColumns && currentColumns.length > 0) {
                        if (level > maxLevel) maxLevel = level
                        currentColumns.forEach((column) => {
                            column.level = level - 1
                            calcLevel(column.children, level + 1)
                        })
                    }
                })(currentColumns, 1);

                /*计算每个节点所占行数以及列数*/
                function calcRowSpan(column) {
                    if (!!column.children && column.children.length > 0) {
                        column.children.forEach(child => calcRowSpan(child))
                        column.rowSpan = 1
                        column.colSpan = 0
                        column.children.forEach((child) => {
                            column.colSpan += child.colSpan
                        })
                    } else {
                        column.rowSpan = maxLevel - column.level
                        column.colSpan = 1
                    }
                }

                currentColumns.forEach(column => calcRowSpan(column))
                this.maxLevel = maxLevel
                this.currentColumns = currentColumns
                this.collectHeadColumns()
            },
            collectHeadColumns() {
                /*将要渲染的头信息*/
                let currentHeadColumns = []
                let num = 0
                while (num < this.maxLevel) {
                    currentHeadColumns.push([])
                    num++
                }

                function iterateColumn(columns) {
                    if (!!columns && columns.length > 0) {
                        columns.sort((a, b) => (b.order - 0) - (a.order - 0))
                        columns.forEach((column) => {
                            currentHeadColumns[column.level].push(column)
                            iterateColumn(column.children)
                        })
                    }
                }

                iterateColumn(this.currentColumns)
                this.currentHeadColumns = currentHeadColumns
            },
        },
        mounted() {
            this.collectColumns()
        },
    }
</script>
