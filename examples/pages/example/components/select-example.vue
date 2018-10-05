<template>
    <div class="select-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-select :data="list"
                       children-key="children"
                       @select="handleSelect"
            >
                <template slot-scope="data">
                    {{data.name}}
                </template>
            </am-select>
        </div>
        <div class="title">设置input样式</div>
        <div class="title">只读，不是禁用</div>
        <div class="title">自定义渲染内容</div>
    </div>
</template>

<script>
    export default {
        name: "select-example",
        data() {
            return {
                list: [
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
        },
    }
</script>

<style lang="scss">

</style>
