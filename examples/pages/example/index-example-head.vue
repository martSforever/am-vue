<template>
    <div class="index-example-head">

        <div class="title">
            <img :src="logo">
            <div>
                <h3>Welcome to Am-vue</h3>
                <h5>Am-vue is a component library based on vue2.0, enjoy yourself!</h5>
            </div>
        </div>
        <div class="nav">
            <div class="nav-item">
                <am-icon icon="fas-compass"/>
                <span>Introduction</span>
            </div>
            <div class="nav-item">
                <am-icon icon="fas-gift"/>
                Components
            </div>
            <div class="nav-item">
                <am-icon icon="fas-graduation-cap"/>
                Tutorial
            </div>
        </div>
        <div class="nav2">
            <!--<div class="nav-item">
                Language
                <am-icon icon="fas-chevron-down"/>
            </div>-->

            <am-dropdown align="start"
                         trigger="hover"
                         :scroll-x="false">
                <div class="nav-item" slot="reference">
                    {{$amlocale.languageName}}
                    <am-icon icon="fas-chevron-down"/>
                </div>
                <div slot="popover">
                    <am-dropdown-item
                        @click="changeLang(lang)"
                        v-for="(lang,index) in langs"
                        :key="index">
                        {{lang.languageName}}
                    </am-dropdown-item>
                </div>
            </am-dropdown>
        </div>

        <div>
            <a href="https://github.com/martSforever/am-vue/issues" target="_blank"
               style="text-decoration: none;margin-right: 12px">
                <am-icon icon="fas-question" size="25px"/>
            </a>
            <a href="https://github.com/martSforever/am-vue" target="_blank">
                <am-icon icon="fab-github" size="30px" color="black"/>
            </a>
        </div>
    </div>
</template>

<script>
    const logo = require('examples/assets/logo.png');
    import zhCN from 'amvue/locale/lang/zh-CN.js'
    import enUS from 'amvue/locale/lang/en-US.js'

    export default {
        name: 'index-example-head',
        data() {
            return {
                logo,
                langs: [zhCN, enUS],
            };
        },
        methods: {
            changeLang(lang) {
                this.$ami18n.setLocale(lang)
                window.localStorage.setItem('locale', lang.locale)
            },
        },
        mounted() {
            const locale = window.localStorage.getItem('locale')
            console.log(this.langs)
            if (!!locale) {
                for (let i = 0; i < this.langs.length; i++) {
                    const lang = this.langs[i];
                    console.log(lang.locale, locale)
                    if (lang.locale === locale) {
                        this.$ami18n.setLocale(lang)
                        break
                    }
                }
            }
        },
    };
</script>

<style lang="scss">
    .index-example-head {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 $padding;
        box-shadow: 0px 0px 5px 0px #999;
        background-color: $color-normal-background;
        .title {
            height: 100%;
            color: $color-normal-title;
            display: inline-flex;
            align-items: center;
            img {
                height: 50px;
                margin-right: 24px;
                width: auto;
            }
        }
        .nav, .nav2 {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nav-item {
                color: $color-normal-sub-color;
                height: 100%;
                display: flex;
                margin: 0 12px;
                align-items: center;
                justify-content: space-around;
                cursor: pointer;
                border-bottom: solid 2px transparent;
                @include transition-all();
                .am-icon {
                    margin-right: 0.25em;
                }
                &:hover {
                    color: $color-primary;
                    border-bottom: solid 2px $color-primary;
                }
            }
        }
        .nav2 {
            .nav-item {
                padding: 0;
                margin: 0;
            }
            .am-icon {
                margin-left: 0.25em;
            }
            .am-dropdown {
                height: 100%;
                .am-dropdown-reference-wrapper {
                    height: 100%;
                }
            }
        }
    }
</style>
