<template>
    <div class="select-example example-page">
        <div class="title">基本用法 <br>
            最基本的用法需要完成三个步骤
            1、准备需要显示的数组list，
            2、要显示的文本属性的key，
            3、显示的作用于插槽模板
        </div>
        <div class="example-row">
            <am-select :data="list1"
                       show-key="name">
                <template slot-scope="data">
                    {{data.name}}
                </template>
            </am-select>
        </div>
        <div class="title">设置input样式，select复用了input组件，继承了input组件所有属性</div>
        <div class="example-row">
            <am-select :data="list1"
                       show-key="name"

                       type="fill"
                       color="primary"
                       suffix-icon="fas-angle-down"
            >
                <template slot-scope="data">
                    {{data.name}}
                </template>
            </am-select>
        </div>

        <div class="title">自定义渲染内容</div>
        <div class="example-row">
            <am-select :data="list1"
                       show-key="name"
            >
                <template slot-scope="data">
                    <div>
                        <am-icon icon="fab-github"/>
                        {{data.name}}
                    </div>
                </template>
            </am-select>
        </div>
        <div class="title">级联选择</div>
        <div class="example-row">
            <am-select :data="list10"
                       show-key="name"
                       children-key="children"
            >
                <template slot-scope="data">
                    <div>
                        {{data.name}}
                    </div>
                </template>
            </am-select>
        </div>
        <div class="title">使用渲染函数渲染模板</div>
        <div class="example-row">
            <am-select :data="list10"
                       show-key="name"
                       children-key="children"
                       :render-func="renderFunc"
            >
            </am-select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "select-example",
        data() {
            return {
                list1: [
                    {name: '哈密瓜'},
                    {name: '西瓜'},
                    {name: '南瓜'},
                ],
                list10: [
                    {
                        name: '广东省', children: [
                            {
                                name: '佛山市', children: [
                                    {name: '禅城区',},
                                    {name: '顺德区',}
                                ]
                            },
                            {name: '广州市', children: [{name: '越秀区'}, {name: '天河区'}, {name: '白云区'}]},
                            {name: '深圳市', children: [{name: '龙岗区'}, {name: '宝安区'}]},
                            {name: '韶关市', children: [{name: '武江区'}, {name: '仁化县'}]},
                            {name: '江门市', children: [{name: '蓬江区'}, {name: '大埔县'}]},
                        ]
                    },
                    {
                        name: '广西省', children: [
                            {name: '南宁市', children: [{name: '江南区'}, {name: '马山县'}, {name: '横县'},]},
                            {name: '贵港市', children: [{name: '桂平县'}, {name: '平南县'},]},
                            {name: '防城港市', children: [{name: '港口区'}]},
                        ]
                    },
                ]
            }
        },
        methods: {
            handleSelect(result) {
                this.$notice.show({
                    message: result.reduce((ret, item) => {
                        ret += item.name
                        return ret
                    }, '')
                })
            },
            renderFunc(h, data) {
                return (
                    <div><am-icon icon="fas-user"/>{data.name}</div>
                )
            },
        },
    }
</script>

<style lang="scss">

</style>
