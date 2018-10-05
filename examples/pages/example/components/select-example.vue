<template>
    <div class="select-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-select :data="list" :show="true" children-key="children">
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
                            // {name: '广州市'},
                            // {name: '深圳市'},
                        ]
                    },
                    {
                        name: '广西省', children: [
                            {name: '南宁市'},
                            {name: '贵港市'},
                            {name: '防城港'},
                        ]
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">

</style>
