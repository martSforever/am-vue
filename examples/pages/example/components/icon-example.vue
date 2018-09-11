<template>
    <div class="icon-example example-page">

        <div class="title">概述</div>
        <div class="desc">
            amvue 的icon默认情况下使用了font-awesome5，font-awesome5的官网地址：<a href="https://fontawesome.com/icons?from=io">https://fontawesome.com/icons?from=io</a>
            ，其中使用了免费的图标，所以收费的图标是无法是用的喔，在搜索图标的时候，请将免费[Free]勾选上，否则如果是误使用了收费的图标，是显示不出来的。
            因为amvue对font-awesome做了一层封装，所以在使用font-awesome的图标的时候，与font-awesome官网示例有点区别，在amvue中，通过am-icon使用font-awesome图标的方式为：

        </div>
        <div class="desc">

        </div>

        <am-icon icon="fas-heart"/>
        <am-icon icon="fas-heart" :loading="true"/>
        <am-icon icon="fas-heart" size="20px"/>
        <am-icon icon="fas-heart" color="red"/>
    </div>
</template>

<script>
    export default {
        name: 'icon-example'
    };
</script>

<style lang="less">

</style>
