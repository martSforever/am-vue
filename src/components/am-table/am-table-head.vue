<template>
    <div class="am-table-head"
         :style="{height:`${tableHeadHeight}px`}">
        <am-scrollbar :scroll-x="contentFixed ==='center'"
                      :scrollbar-size="0"
                      ref="scrollbar"
                      @scroll="e=>$emit('scroll',e)">
            <table>
                <tr v-for="(row,rowIndex) in headColumns"
                    :key="rowIndex">
                    <am-table-head-cell
                        v-for="(col,colIndex) in row"
                        :key="colIndex"
                        :padding="padding"
                        :border-size="borderSize"
                        :border-color="borderColor"
                        :head-row-height="headRowHeight"
                        :col="col"
                        :content-fixed="contentFixed"
                        :sort-field="sortField"
                        :sort-desc="sortDesc"
                    />
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
            borderSize: {},
            borderColor: {},
            sortField: {type: String},
            sortDesc: {type: Boolean, default: true},
        },
    }
</script>
