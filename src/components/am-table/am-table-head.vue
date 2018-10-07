<template>
    <div class="am-table-head"
         :style="{height:`${tableHeadHeight}px`}">
        <am-scrollbar :scroll-y="false" :scroll-x="false" :scrollbar-size="0" ref="scrollbar">
            <table>
                <tr v-for="(row,rowIndex) in headColumns"
                    :key="rowIndex">
                    <am-table-head-cell
                        v-for="(col,colIndex) in row"
                        :key="colIndex"
                        :padding="padding"
                        :head-row-height="headRowHeight"
                        :col="col"
                        :content-fixed="contentFixed"/>
                </tr>
            </table>
        </am-scrollbar>
    </div>
</template>

<script>
    import AmTableHeadCell from "./am-table-head-cell";
    import AmScrollbar from '../am-scrollbar'

    export default {
        name: "am-table-head",
        components: {
            AmTableHeadCell,
            AmScrollbar,
        },
        props: {
            headColumns: {},
            padding: {},
            headRowHeight: {},
            tableHeadHeight: {},
            contentFixed: {},
        },
    }
</script>
