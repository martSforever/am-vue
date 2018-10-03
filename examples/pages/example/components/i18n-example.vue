<template>
    <div class="i18n-example example-page">
        <div class="title">
            amvue的i18n实现原理比较简单，只有语言切换的功能，无法与vue-i18n相比较
        </div>
        <div class="title">
            基本用法，语言切换
        </div>
        <div class="example-row">
            <am-button>{{$amlocale.languageName}}</am-button>
            <am-button-group>
                <am-button v-for="(lang,index) in langs" @click="$ami18n.setLocale(lang)" :key="index">
                    {{lang.languageName}}
                </am-button>
            </am-button-group>
        </div>
        <div class="title">
            amvue语言文件全部放在amvue/locale/lang/目录下，使用npm构建的用户可以直接通过 <br>
            {{"import zhCN from 'amvue/locale/lang/zh-CN.js'"}} 引入需要的语言<br>
            然后使用{{"$ami18n.setLocale(zhCN)"}}切换到该语言，如果是cdn或者以js文件形式引入amvue的开发者，需要到github上自行下载语言文件，自行引入
        </div>
        <div class="title">
            目前amvue仍处于1.0开发阶段，只支持中英文，后续会支持更多语言，敬请期待……
        </div>
    </div>
</template>

<script>

    import zhCN from 'amvue/locale/lang/zh-CN.js'
    import enUS from 'amvue/locale/lang/en-US.js'

    export default {
        name: "i18n-example",
        data() {
            return {
                langs: [zhCN, enUS]
            }
        },
    }
</script>
