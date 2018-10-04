<template>
    <div class="dropdown-example">
        <div>
            <am-button @click="val1 = !val1">{{val1}}</am-button>
        </div>
        <am-dropdown v-model="val1" direction="bottom">
            <am-button slot="reference">dropdown</am-button>
            <div slot="popover" >
                <am-dropdown-item>刘德华刘德华刘德华刘德华刘德华刘德华</am-dropdown-item>
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
        <am-dropdown trigger="hover">
            <am-button slot="reference">dropdown</am-button>
            <div slot="popover" style="height: 100px;width: 100px">
                hello world martsforever
            </div>
        </am-dropdown>
    </div>
</template>

<script>
    export default {
        name: "dropdown-example",
        data() {
            return {
                val1: false
            }
        },
    }
</script>

<style lang="scss">

</style>
