<template>
    <div class="tab-example">
        <div style="width: 1000px;height: 600px">
            <am-tabbar>
                <am-tab style="background-color: #c1c1c1">item1</am-tab>
                <am-tab style="background-color: #c3c3c3">item2</am-tab>
                <am-tab style="background-color: #c6c6c6">item3</am-tab>
            </am-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tab-example'
    };
</script>

<style lang="scss">
    .tab-example {
        height: 100%;
    }
</style>
