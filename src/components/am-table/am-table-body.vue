<template>
    <div class="am-table-body" :style="{top:`${tableHeadHeight}px`}">
        <am-scrollbar @scroll="handleScroll">
            <table>
                <am-table-row
                    v-for="(row,rowIndex) in list"
                    :key="rowIndex"
                    :render-columns="renderColumns"
                    :row="row"
                    :row-index="rowIndex"
                    :padding="padding"
                    :body-row-height="bodyRowHeight"
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
        },
        methods: {
            handleScroll(e) {
                this.$emit('scroll', e)
            },
        },
    }
</script>
