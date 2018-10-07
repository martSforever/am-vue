<template>
    <div class="am-table-body" :style="{top:`${tableHeadHeight}px`}">
        <am-scrollbar ref="scrollbar"
                      @scroll="handleScroll"
                      :scroll-x="contentFixed === 'center'"
                      :scrollbar-size="contentFixed === 'center'?scrollbarSize:0">
            <table>
                <am-table-row
                    v-for="(row,rowIndex) in list"
                    :key="rowIndex"
                    :render-columns="renderColumns"
                    :row="row"
                    :row-index="rowIndex"
                    :padding="padding"
                    :body-row-height="bodyRowHeight"
                    :content-fixed="contentFixed"
                    :class="{'am-table-row-hover':hoverIndex === rowIndex}"
                    @mouseenter.native="currentHoverIndex = rowIndex"
                />
            </table>
        </am-scrollbar>
    </div>
</template>

<script>
    import AmTableRow from "./am-table-row";
    import AmScrollbar from '../am-scrollbar'

    export default {
        name: "am-table-body",
        components: {
            AmTableRow,
            AmScrollbar,
        },
        props: {
            renderColumns: {},
            bodyRowHeight: {},
            list: {},
            padding: {},
            tableHeadHeight: {},
            contentFixed: {},
            scrollbarSize: {},
            hoverIndex: {},
        },
        watch: {
            hoverIndex(val) {
                if (this.currentHoverIndex !== val) this.currentHoverIndex = val
            },
            currentHoverIndex(val) {
                this.$emit('update:hoverIndex', val)
            },
        },
        data() {
            return {
                currentHoverIndex: this.hoverIndex
            }
        },
        methods: {
            handleScroll(e) {
                this.$emit('scroll', e)
            },
        },
    }
</script>
