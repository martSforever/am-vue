<template>
    <div class="am-tree">
        <div class="am-tree-node-wrapper">
            <div class="am-tree-icon-wrapper">
                <am-radio
                    @click.native="toggle"
                    :disabled="true"
                    :active-icon="hasChildren?expandIcon:disableExpandIcon"
                    :inactive-icon="hasChildren?reduceIcon:disableExpandIcon"
                    :value="currentShow || !hasChildren"
                />
                <am-radio
                    v-if="!!checkKey"
                    @change="_handleCheckChange"
                    :active-icon="checkedIcon"
                    :inactive-icon="uncheckIcon"
                    v-model="data[checkKey]"
                />
            </div>
            <div class="am-tree-content-wrapper" @click="_handleClickNodeContent" :class="{'am-tree-content-wrapper-clickable':!!openOnClickContent}">
                <rendering-scope-slot v-if="!!root.$scopedSlots.default"
                                      :scope-slot-func="root.$scopedSlots.default"
                                      :data="data"/>
                <rendering-render-func v-if="renderFunc" :render-func="renderFunc" :data="data"/>
            </div>
        </div>
        <am-collapse-transition>
            <div class="am-tree-children-wrapper"
                 v-show="!!childrenKey && !!data[childrenKey] && data[childrenKey].length>0 && currentShow">
                <div v-if="initialized">
                    <am-tree v-for="(item,index) in data[childrenKey]"
                             :key="index"
                             :data="item"
                             :is-root="false"
                             :children-key="childrenKey"
                             :expand-icon="expandIcon"
                             :reduce-icon="reduceIcon"
                             :checked-icon="checkedIcon"
                             :uncheck-icon="uncheckIcon"
                             :disable-expand-icon="disableExpandIcon"
                             :initialized-on-start="initializedOnStart"
                             :before-open="beforeOpen"
                             :render-func="renderFunc"
                             :open-on-start="openOnStart"
                             :checkKey="checkKey"/>
                </div>
            </div>
        </am-collapse-transition>
    </div>
</template>

<script>
    import Vue from 'vue'
    import AmRadio from "../am-radio/am-radio";
    import RenderingScopeSlot from "../am-render/rendering-scope-slot";
    import AmCollapseTransition from "../am-collapse/am-collapse-transition";
    import RenderingRenderFunc from "../am-render/rendering-render-func";

    export default {
        name: "am-tree",
        components: {RenderingRenderFunc, AmCollapseTransition, RenderingScopeSlot, AmRadio},
        props: {
            data: {type: Object, required: true, default: null, desc: '每个节点渲染的数据'},

            expandIcon: {type: String, default: 'fas-minus-square'},
            reduceIcon: {type: String, default: 'fas-plus-square'},
            disableExpandIcon: {type: String, default: 'fas-square'},

            checkedIcon: {type: String, default: 'fas-check-square'},
            uncheckIcon: {type: String, default: 'far-square'},
            childrenKey: {type: String, required: true, desc: '子树数据在props->data中的对象属性key',},
            renderFunc: {type: Function, desc: '支持两种自定义节点内容方式，这个是其中一种，通过渲染函数的方式进行，第一个参数为h，第二个参数为节点渲染所需要的数据',},

            isRoot: {type: Boolean, default: true, desc: '是否为根节点，这个属性是供a-tree内部使用的，实际业务开发的时候无需关注该属性',},
            initializedOnStart: {type: Boolean, desc: '是否在初始化的时候就渲染所有节点',},
            beforeOpen: {type: Function, desc: '在打开之前触发的动作，可以用来延迟加载数据',},
            openOnStart: {type: Boolean, default: false, desc: '是否在初始化的时候就打开所有节点',},
            openOnClickContent: {type: Boolean, default: true, desc: '是否在点击tree节点的时候，展开或者收缩节点树内容'},
            checkKey: {type: String, desc: '该属性的值为复选框是否选中所绑定的data的属性key，只有该属性不为空的时候，才会显示复选框'}
        },
        watch: {
            currentShow(val) {
                if (!this.initialized && !!val) this.initialized = true
            },
        },
        data() {
            return {
                root: null,                                                     //根节点
                currentShow: this.openOnStart,                                  //展开收起状态
                initialized: this.initializedOnStart || this.openOnStart,       //是否已经初始化树内容
            }
        },
        methods: {
            /*点击节点事件*/
            _handleClickNodeContent() {
                !!this.openOnClickContent && this.toggle()
            },
            /*复选框改产触发动作*/
            _handleCheckChange(checked) {
                /*将子节点全部重设*/
                if (!!this.data && !!this.childrenKey && !!this.data[this.childrenKey] && this.data[this.childrenKey].length > 0) {
                    let _this = this

                    function iterate(array) {
                        if (!!array && array.length > 0)
                            array.forEach((item) => {
                                Vue.set(item, _this.checkKey, checked)
                                iterate(item[_this.childrenKey])
                            })
                    }

                    iterate(this.data[this.childrenKey])
                }
                /*选中子节点的花，将父节点也选中*/
                if (!!checked) {
                    let parent = this.parent
                    while (!!parent) {
                        Vue.set(parent.data, this.checkKey, true)
                        parent = parent.parent
                    }
                }
            },
            /*展开收起树节点内容*/
            toggle() {
                if (!this.currentShow) this.initialized = true
                this.$nextTick(() => {
                    !!this.currentShow ?
                        this._close()
                        :
                        this._open()
                })
            },
            /*打开节点内容*/
            _open() {
                if (!!this.beforeOpen) {
                    this.beforeOpen(this.data, () => {
                        this.currentShow = true
                    })
                } else
                    this.currentShow = true
            },
            /*收起节点内容*/
            _close() {
                this.currentShow = false
            },
        },
        created() {
            let parentTree = this.$parent.$parent
            this.root = !!this.isRoot ? this : parentTree.root
            this.parent = !!this.isRoot ? null : parentTree
        },
        computed: {
            hasChildren() {
                return (!!this.childrenKey && !!this.data[this.childrenKey] && this.data[this.childrenKey].length > 0)
            },
        },
    }
</script>
