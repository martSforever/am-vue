<template>
    <div class="dropdown-example example-page">
        <div class="title">
            基本用法
        </div>
        <div class="example-row">
            <am-dropdown>
                <am-button slot="reference">dropdown</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                    <am-dropdown-item>范丞丞</am-dropdown-item>
                    <am-dropdown-item>刘德华</am-dropdown-item>
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                    <am-dropdown-item>范丞丞</am-dropdown-item>
                </div>
            </am-dropdown>
        </div>
        <div class="title">
            dropdown组件复用了popover组件其中传递了很多属性，主要有：<br>
            show-arrow、size-equal、hide-on-click-outside、arrow-size、
            direction、align、shadow、border-radius
        </div>
        <div class="example-row">
            <am-dropdown direction="right" align="center">
                <am-button slot="reference">dropdown</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                </div>
            </am-dropdown>
        </div>
        <div class="title">
            激活方式trigger:click|hover
        </div>
        <div class="example-row">
            <am-dropdown trigger="click">
                <am-button slot="reference">click</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                </div>
            </am-dropdown>
            <am-dropdown trigger="hover">
                <am-button slot="reference">hover</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                </div>
            </am-dropdown>
        </div>
        <div class="title">
            禁用
        </div>
        <div class="example-row">
            <am-switch v-model="disabled"></am-switch>
            <am-dropdown :disabled="disabled">
                <am-button slot="reference">click</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                </div>
            </am-dropdown>
            <am-dropdown :disabled="disabled" trigger="hover">
                <am-button slot="reference">hover</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                </div>
            </am-dropdown>
        </div>
        <div class="title">
            设置宽度和高度 <br>
            [因为这里用了scrollbar组件，而且scrollbar组件的缺陷是scrollbar不能依赖于内容的大小进行变化，目前
            无法实现的一个功能是，当dropdown中的dropdownItem数量过少时，只显示少数的dropdownItem，当dropdownItem过多时，滚动显示]
        </div>
        <div class="example-row">
            <am-dropdown :width="200" :height="300">
                <am-button slot="reference">click</am-button>
                <div slot="popover">
                    <am-dropdown-item>吴彦祖</am-dropdown-item>
                    <am-dropdown-item>张学友</am-dropdown-item>
                    <am-dropdown-item>易烊千玺</am-dropdown-item>
                    <am-dropdown-item>王源</am-dropdown-item>
                </div>
            </am-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dropdown-example",
        data() {
            return {
                val1: false,
                disabled: false
            }
        },
    }
</script>

<style lang="scss">

</style>
