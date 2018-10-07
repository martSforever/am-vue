<template>
    <span class="am-table-column"><slot :row="{}"></slot></span>
</template>

<script>

    import {oneOf} from "../../scripts/utils";

    export default {
        name: "am-table-column",
        props: {
            field: {type: String, desc: '标志字段',},
            title: {type: String, desc: '列标题，当没有titleRenderFunc以及没有$scopedSlots.title时，显示该文本',},
            width: {default: '120px', desc: '列宽度'},
            order: {default: 0, desc: '列排序'},
            titleRenderFunc: {type: Function, desc: '自定义列标题渲染函数'},
            colRenderFunc: {type: Function, desc: '自定义列内容渲染函数'},
            fixed: {
                type: String, default: 'center', validator(val) {
                    return oneOf(val, ['left', 'right', 'center'])
                },
            },
        },
        watch: {
            order(newval, oldval) {
                if (newval !== oldval) {
                    this.$parent.collectHeadColumns()
                }
            },
            width(val) {
                if (this.currentWidth !== val) this.currentWidth = val
            },
            currentWidth(val) {
                this.$emit('update:width', val)
            },
        },
        data() {
            return {
                currentWidth: this.width,
                isTableColumn: true,
            }
        },
        computed: {
            column() {
                const _this = this
                let ret = {
                    get width() {
                        return _this.currentWidth
                    },
                    get title() {
                        return _this.title
                    },
                    get titleScopedSlot() {
                        return _this.$scopedSlots.title
                    },
                    get colScopedSlot() {
                        return _this.$scopedSlots.default
                    },
                    get titleRenderFunc() {
                        return _this.titleRenderFunc
                    },
                    get colRenderFunc() {
                        return _this.colRenderFunc
                    },
                    get order() {
                        switch (_this.fixed) {
                            case 'left':
                                return (_this.order - 0) + 99999
                            case 'right':
                                return (_this.order - 0) - 9999
                            default:
                                return _this.order
                        }
                    },
                    get field() {
                        return _this.field
                    },
                    get fixed() {
                        return _this.fixed
                    },
                    updateWidth(width) {
                        _this.currentWidth = width
                    },
                }
                ret.children = this.$children.reduce((ret, child) => {
                    if (!!child.isTableColumn) ret.push(child.column)
                    return ret
                }, [])
                return ret
            }
        },
    }
</script>
