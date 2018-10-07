<template>
    <div class="am-table-content" :class="[`am-table-content-${contentFixed}`]" :style="styles">
        <am-table-head
            ref="head"
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :content-fixed="contentFixed"
        />
        <am-table-body
            ref="body"
            :render-columns="renderColumns"
            :list="list"
            :padding="padding"
            :body-row-height="bodyRowHeight"
            :table-head-height="tableHeadHeight"
            :content-fixed="contentFixed"
            @scroll="handleBodyScroll"
        />
    </div>
</template>

<script>
    import AmTableHead from "./am-table-head";
    import AmTableBody from "./am-table-body";
    import {removePx} from "../../scripts/utils";

    export default {
        name: "am-table-content",
        components: {AmTableBody, AmTableHead},
        props: {
            headColumns: {},
            padding: {},
            headRowHeight: {},
            tableHeadHeight: {},
            renderColumns: {},
            bodyRowHeight: {},
            list: {},
            contentFixed: {},
            scrollbarSize: {},
        },
        methods: {
            handleBodyScroll(e) {
                (this.contentFixed === 'center') && (this.$refs.head.$refs.scrollbar.$refs.wrapper.scrollLeft = e.target.scrollLeft)
                this.$emit('scroll', e)
            },
        },
        computed: {
            styles() {
                let styles = {}
                if (this.contentFixed !== 'center') {
                    let count = 0
                    let width = this.renderColumns.reduce((ret, item) => {
                        if (item.fixed === this.contentFixed) {
                            count++;
                            ret += removePx(item.width)
                        }
                        return ret
                    }, 0)
                    styles.width = `${width + count * 2}px`
                }
                return styles
            },
        },
    }
</script>
