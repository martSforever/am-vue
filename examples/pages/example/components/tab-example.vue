<template>
    <div class="tab-example">
        <am-button-group>
            <am-button icon="fas-plus" @click="index1++"/>
            <am-button>{{index1}}</am-button>
            <am-button icon="fas-minus" @click="index1--"/>
        </am-button-group>
        <am-button-group>
            <am-button @click="add">add tab</am-button>
            <am-button @click="remove">remove tab</am-button>
        </am-button-group>
        <div style="width: 1000px;height: 600px">
            <am-tabbar v-model="index1" :swipeable="false" ref="tabbar">
                <am-tab style="background-color: #c1c1c1" title="客户" :order="4">
                    客户--{{index1}}
                </am-tab>
                <am-tab style="background-color: #c3c3c3" title="杂货铺" :order="2">
                    <div>杂货铺--{{index1}}</div>
                </am-tab>
                <am-tab style="background-color: #c6c6c6" title="智慧零售门店" :order="1">智慧零售门店--{{index1}}</am-tab>
                <am-tab style="background-color: #c6c6c6" title="小门店" :order="3">小门店--{{index1}}</am-tab>
                <am-tab style="background-color: #c6c6c6" title="新开门店" :order="5">新开门店--{{index1}}</am-tab>
            </am-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tab-example',
        data() {
            return {
                index1: 0
            };
        },
        methods: {
            add() {
                this.$refs.tabbar.add({
                    title: 'new tab',
                    order: (Math.random() * this.$refs.tabbar.tabs.length).toFixed(0) - 0,
                    context: this,
                    render(h, context) {
                        return (
                            <div>
                                --{context.index1}--
                            </div>
                        );
                    },
                });
            },
            remove() {
                let randomIndex = (Math.random() * this.$refs.tabbar.tabs.length).toFixed(0) - 0;
                this.$refs.tabbar.remove(randomIndex);
            },
        },
    };
</script>

<style lang="scss">
    .tab-example {
        height: 100%;
    }
</style>
