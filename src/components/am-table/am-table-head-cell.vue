<template>
    <td :rowspan="col.rowspan"
        :colspan="col.colspan"
        :style="{border:`solid ${borderSize}px ${borderColor}`}"
        class="am-table-head-cell">
        <am-table-cell
            :styles="{width:col.width,padding:`${padding}`,height:`${headRowHeight}px`}"
            :data="{col}"
            :text="col.title"
            :render-fcun="col.titleRenderFunc"
            :scope-slot-func="col.titleScopedSlot"
            :content-fixed="contentFixed"
            :fixed="col.fixed">
            <div class="am-table-head-cell-sort" :class="sortClasses">
                <am-icon icon="fas-sort-up" class="am-table-head-cell-sort-asc-icon"/>
                <am-icon icon="fas-sort-down" class="am-table-head-cell-sort-desc-icon"/>
            </div>
        </am-table-cell>
        <div v-if="col.fixed === contentFixed"
             class="am-table-head-cell-drag-indicator"
             :style="dragIndicatorStyles"
             @mousedown="handleMouseDown"></div>
    </td>
</template>

<script>
    import RenderingScopeSlot from "../am-render/rendering-scope-slot";
    import RenderingRenderFunc from "../am-render/rendering-render-func";
    import AmTableCell from "./am-table-cell";
    import {findComponentUpward} from "../../scripts/dom";
    import {addClass, removeClass} from "../../scripts/dom";
    import {removePx} from "../../scripts/utils";
    import AmIcon from "../am-icon/am-icon";

    export default {
        name: "am-table-head-cell",
        components: {AmIcon, AmTableCell, RenderingRenderFunc, RenderingScopeSlot},
        props: {
            col: {},
            padding: {},
            headRowHeight: {},
            contentFixed: {},
            borderSize: {},
            borderColor: {},
            sortField: {type: String},
            sortDesc: {type: Boolean, default: true},
        },
        data() {
            return {
                table: null,
            }
        },
        mounted() {
            this.table = findComponentUpward(this, 'am-table')
            console.log(this.col.field, this.contentFixed)
        },
        computed: {
            dragIndicatorStyles() {
                return {
                    width: '8px',
                    right: `0`,
                    height: '100%'
                }
            },
            dragColumn() {
                function iterate(column) {
                    if (!(!!column.children && column.children.length > 0)) return column
                    else {
                        return iterate(column.children[column.children.length - 1])
                    }
                }

                return iterate(this.col)
            },
            sortClasses() {
                return {
                    [`am-table-head-cell-sort-${this.sortDesc ? 'desc' : 'asc'}`]: !!this.sortField && this.sortField === this.col.field
                }
            },
        },
        methods: {
            handleMouseDown(e) {
                this.startX = e.clientX
                document.addEventListener('mousemove', this.handleMouseMove)
                document.addEventListener('mouseup', this.handleMouseUp)
                addClass(document.body, 'am-body-user-select-none')
                this.indicator = document.createElement('div')
                this.indicator.style.width = `${e.target.offsetWidth}px`
                this.indicator.style.backgroundColor = '#ddd'
                this.indicator.style.zIndex = 1
                this.indicator.style.height = `${this.table.$el.offsetHeight}px`
                this.indicator.style.display = 'inline-block'
                this.indicator.style.position = 'absolute'
                this.indicator.style.top = `${this.table.$el.getBoundingClientRect().top}px`
                this.indicator.style.left = `${e.clientX - e.target.offsetWidth / 2}px`
                document.body.appendChild(this.indicator)
            },
            handleMouseMove(e) {
                this.indicator.style.left = `${e.clientX}px`
            },
            handleMouseUp(e) {
                document.removeEventListener('mousemove', this.handleMouseMove)
                document.removeEventListener('mouseup', this.handleMouseUp)
                removeClass(document.body, 'am-body-user-select-none')
                document.body.removeChild(this.indicator)
                this.endX = e.clientX
                let durX = this.endX - this.startX
                let width = removePx(this.dragColumn.width)
                width = width + durX
                width = width > 30 ? width : 30
                this.dragColumn.updateWidth(`${width}px`)
            },
        },
    }
</script>
