<template>
    <div class="am-table-content" :class="[`am-table-content-${contentFixed}`]" :style="styles">
        <am-table-head
            ref="head"
            :head-columns="headColumns"
            :padding="padding"
            :head-row-height="headRowHeight"
            :table-head-height="tableHeadHeight"
            :content-fixed="contentFixed"
            :border-size="borderSize"
            :border-color="borderColor"
            @scroll="handleScroll"
            @mouseenter.native="focusPart = 'head'"
        />
        <am-table-body
            ref="body"
            :render-columns="renderColumns"
            :list="list"
            :padding="padding"
            :body-row-height="bodyRowHeight"
            :table-head-height="tableHeadHeight"
            :content-fixed="contentFixed"
            :hover-index="hoverIndex"
            :border-size="borderSize"
            :border-color="borderColor"
            @update:hoverIndex="e=>$emit('update:hoverIndex',e)"
            :select-index="selectIndex"
            @update:selectIndex="e=>$emit('update:selectIndex',e)"
            @scroll="handleScroll"
            @mouseenter.native="focusPart = 'body'"
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
            hoverIndex: {},
            selectIndex: {},
            borderSize: {},
            borderColor: {},
        },
        data() {
            return {
                focusPart: null,
            }
        },
        methods: {
            handleScroll(e) {
                if (this.contentFixed === 'center') {
                    if (this.focusPart === 'body')
                        this.$refs.head.$refs.scrollbar.$refs.wrapper.scrollLeft = e.target.scrollLeft
                    else {
                        this.$refs.body.$refs.scrollbar.$refs.wrapper.scrollLeft = e.target.scrollLeft
                    }
                }
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
                    styles.width = `${width + (count + 1) * this.borderSize}px`
                }
                return styles
            },
        },
    }
</script>
