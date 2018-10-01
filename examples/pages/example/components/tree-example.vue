<template>
    <div class="tree-example example-page">
        <am-tree :data="data" childrenKey="city" >
            <template slot-scope="item">
                <span class="name">{{item.name}}</span>
            </template>
        </am-tree>
    </div>
</template>

<script>
    export default {
        name: "tree-example",
        data() {
            return {
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
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
