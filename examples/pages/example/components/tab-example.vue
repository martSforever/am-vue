<template>
    <div class="tab-example">
        <div>{{index1}}</div>
        <div style="width: 1000px;height: 600px">
            <am-tabbar v-model="index1">
                <am-tab style="background-color: #c1c1c1" title="客户">
                    item1--{{index1}}
                </am-tab>
                <am-tab style="background-color: #c3c3c3" title="杂货铺"><div>item2--{{index1}}</div></am-tab>
                <am-tab style="background-color: #c6c6c6" title="智慧零售门店">item3--{{index1}}</am-tab>
                <am-tab style="background-color: #c6c6c6" title="小门店">item4--{{index1}}</am-tab>
                <am-tab style="background-color: #c6c6c6" title="新开门店">item5--{{index1}}</am-tab>
            </am-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tab-example',
        data() {
            return {
                index1: 1
            };
        },
    };
</script>

<style lang="scss">
    .tab-example {
        height: 100%;
    }
</style>
