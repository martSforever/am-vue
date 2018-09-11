<template>
    <div class="icon-example example-page">

        <div class="title">Font-Awesome</div>
        <div class="desc">
            amvue 的icon默认情况下使用了font-awesome5，font-awesome5的官网地址：<a href="https://fontawesome.com/icons?from=io">https://fontawesome.com/icons?from=io</a>
            ，其中使用了免费的图标，所以收费的图标是无法是用的喔，在搜索图标的时候，请将免费[Free]勾选上，否则如果是误使用了收费的图标，是显示不出来的。
            因为amvue对font-awesome做了一层封装，所以在使用font-awesome的图标的时候，与font-awesome官网示例有点区别，在amvue中，通过am-icon使用font-awesome图标的方式为：

        </div>
        <div class="desc">
            <div class="desc-title">1、使用font awesome的brand icon</div>
            <div>
                <am-highlight html='<am-icon icon="fas-heart"/>'/>
                <am-icon icon="fab-fort-awesome"/>
            </div>
        </div>
        <div class="desc">
            <div class="desc-title">2、使用font awesome的 regular icon</div>
            <div>
                <am-highlight html='<am-icon icon="far-sun"/>'/>
                <am-icon icon="far-sun"/>
            </div>
        </div>
        <div class="desc">
            <div class="desc-title">3、使用font awesome的 solid icon</div>
            <div>
                <am-highlight html='<am-icon icon="fas-font"/>'/>
                <am-icon icon="fas-font"/>
            </div>
        </div>

        <div class="desc">
            <div class="desc-title">font-awesome官方的使用方法本来是传入一个数组，经过amvue封装之后，只需要传入对应字符串即可</div>
            <div>
                <am-highlight html='<font-awesome-icon :icon="["fas","user"]"/>'/>
            </div>
        </div>

        <div class="desc">
            <div class="desc-title">4、因为是使用的免费的icon，所以不能使用font awesome的light icon</div>
        </div>

        <div class="title">阿里巴巴Iconfont</div>
        <div class="desc">
            am-vue默认支持阿里巴巴的iconfont，只需要一下几步即可在am-icon中使用阿里巴巴iconfont，官网地址 <a href="http://www.iconfont.cn/">http://www.iconfont.cn/</a>
        </div>

        <div class="desc">
            <div class="desc-title">1、首先是需要在阿里巴巴iconfont官网上新建一个项目</div>
            <div class="desc-title">2、在项目管理页面中，生成Symbol的链接地址，在index.html中通过script标签加载该js文件</div>
            <div class="desc-title">3、在配置amvue的时候，写上在阿里巴巴iconfont中配置的icon前缀</div>
            <div>
                <am-highlight html='Vue.use(Amvue, {IconfontPrefix: "ali-icon"});'/>
            </div>
            <div class="desc-title">4、在使用am-icon的时候，会自动判断，如果不是以fas-、far-、fab-开头的icon，会自动使用阿里巴巴iconfont图标</div>
            <div>
                <am-highlight html='<am-icon icon="color-drink"/>'/>
                <am-icon icon="color-drink"/>
            </div>
        </div>

        <div class="title"></div>
        <div class="desc-title">icon的loading状态</div>
        <div>
            <am-highlight html='<am-icon icon="fas-font" :loading="true"/>'/>
            <am-icon icon="fas-font" :loading="true"/>
        </div>
        <div class="desc-title">快速设置大小</div>
        <div>
            <am-highlight html='<am-icon icon="fas-font" size="36px"/>'/>
            <am-icon icon="fas-font" size="36px"/>
        </div>
        <div class="desc-title">快速设置颜色</div>
        <div>
            <am-highlight html='<am-icon icon="fas-font" color="blue"/>'/>
            <am-icon icon="fas-font" color="blue"/>
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

<style lang="scss">
    .icon-example {
        .desc {
            .desc-title {
                height: 36px;
                line-height: 36px;
                display: block;
                color: $color-normal-title;
            }
        }
    }
</style>
