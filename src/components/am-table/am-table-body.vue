<template>
    <div class="am-table-body" :style="{top:`${tableHeadHeight}px`}">
        <am-scrollbar ref="scrollbar"
                      @scroll="handleScroll"
                      :scroll-x="contentFixed === 'center'"
                      :scrollbar-size="contentFixed === 'center'?scrollbarSize:0">
            <table>
                <am-table-row
                    ref="rows"
                    v-for="(row,rowIndex) in list"
                    :key="rowIndex"
                    :render-columns="renderColumns"
                    :row="row"
                    :row-index="rowIndex"
                    :padding="padding"
                    :body-row-height="bodyRowHeight"
                    :content-fixed="contentFixed"
                    :border-size="borderSize"
                    :border-color="borderColor"
                    :class="{'am-table-row-hover':hoverIndex === rowIndex,'am-table-row-select':selectIndex === rowIndex}"
                    :style="!!rowStyleFunc?rowStyleFunc({row,rowIndex}):null"
                    :cell-style-func="cellStyleFunc"
                    @mouseenter.native="$emit('update:hoverIndex',rowIndex)"
                    @click.native="$emit('update:selectIndex',rowIndex)"
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
            selectIndex: {},
            borderSize: {},
            borderColor: {},
            rowStyleFunc: {type: Function,},
            cellStyleFunc: {type: Function,},

        },
        methods: {
            handleScroll(e) {
                this.$emit('scroll', e)
            },
        },
    }
</script>
