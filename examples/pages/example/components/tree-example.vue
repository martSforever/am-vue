<template>
    <div class="tree-example example-page">
        <div class="title">
            基本用法，tree组件必须指定data属性以及children-key属性
        </div>
        <div class="example-row">
            <am-tree :data="data" children-key="city">
                <template slot-scope="item">
                    <span class="name">{{item.name}}</span>
                </template>
            </am-tree>
        </div>
        <div class="title">
            设置check-key属性，该属性会绑定到每个节点的data对象的中的[checkKey]属性，有了该属性之后，会出现复选框，可以级联选择
        </div>
        <div class="example-row">
            <am-tree :data="data" children-key="city" check-key="your-key">
                <template slot-scope="item">
                    <span class="name">{{item.name}}</span>
                </template>
            </am-tree>
        </div>
        <div class="title">
            设置expand-icon（节点展开式的展开图标，使用icon组件渲染，支持font-awesome5以及iconfont）、
            reduce-icon（节点收起时的收起图标）、disable-expand-icon（节点不可展开时显示的图标）、
            checked-icon（节点被选中时的图标），uncheck-icon（节点没有被选中时的图标）
        </div>
        <div class="example-row">
            <am-tree :data="data2" children-key="city"
                     check-key="your-key"
                     expand-icon="fab-facebook-f"
                     reduce-icon="fab-apple"
                     checked-icon="fab-java"
                     uncheck-icon="fab-linux"
                     disable-expand-icon="fab-sass"
            >
                <template slot-scope="item">
                    <span class="name">{{item.name}}</span>
                </template>
            </am-tree>
        </div>
        <div class="title">
            使用渲染函数的方式渲染内容
        </div>
        <div class="example-row">
            <am-tree :data="data" children-key="city" :render-func="customeRenderFunc"/>
        </div>
        <div class="title">
            初始化的时候打开所有节点
        </div>
        <div class="example-row">
            <am-tree :data="data" children-key="city" open-on-start>
                <template slot-scope="item">
                    <span class="name">{{item.name}}</span>
                </template>
            </am-tree>
        </div>
        <div class="title">
            是否在初始化的时候就渲染所有节点，默认是懒加载，在第一次打开节点的时候才会初始化节点内容
            <am-switch v-model="initialized"/>
        </div>
        <am-tree :data="data" children-key="city" :initialized-on-start="initialized">
            <template slot-scope="item">
                <tree-exm-node :data="item"/>
            </template>
        </am-tree>
        <div class="title">
            在打开之前触发的动作，可以用来延迟加载数据:before-open
        </div>
        <div class="example-row">
            <am-tree :data="data" children-key="city" :before-open="beforeOpen">
                <template slot-scope="item">
                    <span class="name">{{item.name}}</span>
                </template>
            </am-tree>
        </div>
        <div class="title">
            在点击渲染内容的时候，触发展开/关闭子节点动作：open-on-click-content
        </div>
        <div class="example-row">
            <am-tree :data="data" children-key="city" open-on-click-content>
                <template slot-scope="item">
                    <span class="name">{{item.name}}</span>
                </template>
            </am-tree>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    import {storage} from "../../../scripts/utils";

    const treeExmNode = {
        name: 'tree-exm-node',
        props: {
            data: {},
        },
        render(h) {
            return <span className="name">{this.data.name}</span>
        },
        created() {
            this.$notice.show({message: `${this.data.name}-->>initialized`})
        },
    }

    Vue.component('treeExmNode', treeExmNode)

    export default {
        name: "tree-example",
        data() {
            return {
                initialized: JSON.parse(storage.getItem('initialized')),
                data: {
                    name: '广东省',
                    city: [
                        {
                            name: '广州市',
                            city: [
                                {name: '白云区'},
                                {name: '越秀区'},
                                {name: '天河区'},
                            ]
                        },
                        {
                            name: '佛山市',
                            city: [
                                {name: '禅城区'},
                                {name: '顺德区'},
                            ]
                        },
                        {name: '深圳市'}
                    ]
                },
                data2: {
                    name: '广东省',
                    city: [
                        {
                            name: '广州市',
                            city: [
                                {name: '白云区'},
                                {name: '越秀区'},
                                {name: '天河区'},
                            ]
                        },
                        {
                            name: '佛山市',
                            city: [
                                {name: '禅城区'},
                                {name: '顺德区'},
                            ]
                        },
                        {name: '深圳市'}
                    ]
                },
            }
        },
        watch: {
            initialized(val) {
                storage.setItem('initialized', JSON.stringify(val))
            },
        },
        methods: {
            customeRenderFunc(h, data) {
                return <span className="name">{data.name}</span>
            },
            beforeOpen(data, next) {
                setTimeout(() => {
                    data.city = data.city || []
                    data.city.push({
                        name: 'new city'
                    })
                    next()
                }, 1000)
            },
        },
    }
</script>

<style lang="scss">

</style>
