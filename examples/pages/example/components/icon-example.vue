<template>
    <div class="icon-example example-page">

        <div class="title">概述</div>
        <div class="desc">
            amvue 的icon默认情况下使用了font-awesome5，font-awesome5的官网地址：<a href="https://fontawesome.com/icons?from=io">https://fontawesome.com/icons?from=io</a>
            ，其中使用了免费的图标，所以收费的图标是无法是用的喔，在搜索图标的时候，请将免费[Free]勾选上，否则如果是误使用了收费的图标，是显示不出来的。
            因为amvue对font-awesome做了一层封装，所以在使用font-awesome的图标的时候，与font-awesome官网示例有点区别，在amvue中，通过am-icon使用font-awesome图标的方式为：

        </div>
        <div class="desc">
            <div class="desc-title">1、使用font awesome的brand icon</div>
            <div>
                <am-icon icon="fab-fort-awesome"/>
                <am-highlight html='<am-icon icon="fas-heart"/>'/>
            </div>
        </div>
        <div class="desc">
            <div class="desc-title">2、使用font regular icon</div>
            <div>
                <am-icon icon="far-sun"/>
                <am-highlight html='<am-icon icon="far-sun"/>'/>
            </div>
        </div>
        <div class="desc">
            <div class="desc-title">3、使用font solid icon</div>
            <div>
                <am-icon icon="fas-font"/>
                <am-highlight html='<am-icon icon="fas-font"/>'/>
            </div>
        </div>

        <div class="desc">
            <div class="desc-title">font-awesome官方的使用方法本来是传入一个数组，经过amvue封装之后，只需要传入对应字符串即可</div>
            <div>
                <am-highlight html='<font-awesome-icon :icon="["fas","user"]"/>'/>
            </div>
        </div>


    </div>
</template>

<script>
    import AmHighlight from '../../../../src/components/am-highlight/am-highlight';

    export default {
        name: 'icon-example',
        components: {AmHighlight},
        data() {
            return {};
        },
    };
</script>

<style lang="less">
    .icon-example {
        .desc {
            .desc-title {
                height: 36px;
                line-height: 36px;
                display: inline-block;
            }
        }
    }
</style>
