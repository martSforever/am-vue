<template>
    <div class="tab-example example-page">
        <div class="title">
            基本用法，默认情况下，tabbar大小为父节点的大小
        </div>
        <div class="example-row">
            <div style="height: 300px">
                <am-tabbar>
                    <am-tab title="tab1" style="background-color: #2d8df0">tab1 content</am-tab>
                    <am-tab title="tab2" style="background-color: salmon">tab2 content</am-tab>
                    <am-tab title="tab3" style="background-color: gold">tab3 content</am-tab>
                </am-tabbar>
            </div>
        </div>
        <div class="title">
            启用滑动功能，可以滑动页面滑动tab页签
        </div>
        <div class="example-row">
            <div style="height: 300px">
                <am-tabbar swipeable>
                    <am-tab title="tab1" style="background-color: #2d8df0">tab1 content</am-tab>
                    <am-tab title="tab2" style="background-color: salmon">tab2 content</am-tab>
                    <am-tab title="tab3" style="background-color: gold">tab3 content</am-tab>
                </am-tabbar>
            </div>
        </div>
        <div class="title">
            使用v-model控制当前激活的页签
        </div>
        <div class="example-row">
            <div>
                <am-button-group>
                    <am-button icon="fas-plus" @click="index1++"/>
                    <am-button>{{index1}}</am-button>
                    <am-button icon="fas-minus" @click="index1--"/>
                </am-button-group>
            </div>
            <div style="height: 300px">
                <am-tabbar swipeable v-model="index1">
                    <am-tab title="tab1" style="background-color: #2d8df0">tab1 content</am-tab>
                    <am-tab title="tab2" style="background-color: salmon">tab2 content</am-tab>
                    <am-tab title="tab3" style="background-color: gold">tab3 content</am-tab>
                </am-tabbar>
            </div>
        </div>
        <div class="title">
            动态添加以及删除页签，默认情况下，每个tab都有删除的功能，可以设置closable=false禁用删除，tab可以设置title属性以及order属性，order可以设置tab的顺序位置
        </div>
        <div class="example-row">
            <am-button-group>
                <am-button @click="add">add tab</am-button>
                <am-button @click="remove">remove tab</am-button>
            </am-button-group>
            <div style="height: 300px">
                <am-tabbar ref="tabbar">
                    <am-tab style="background-color: #2d8df0" title="客户" :order="4">
                        客户--{{index1}}
                    </am-tab>
                    <am-tab style="background-color: salmon" title="杂货铺" :order="2">
                        <div>杂货铺--{{index1}}</div>
                    </am-tab>
                    <am-tab style="background-color: gold" title="智慧零售门店" :order="1">智慧零售门店--{{index1}}</am-tab>
                    <am-tab style="background-color: #2d8df0" title="小门店" :order="3">小门店--{{index1}}</am-tab>
                    <am-tab style="background-color: salmon" title="新开门店" :order="5">新开门店--{{index1}}</am-tab>
                </am-tabbar>
            </div>
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
