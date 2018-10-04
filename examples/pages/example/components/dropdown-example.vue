<template>
    <div class="dropdown-example">
        <am-button @click="val1 = !val1">{{val1}}</am-button>
        <am-dropdown v-model="val1">
            <am-button slot="reference">dropdown</am-button>
            <div slot="popover" style="height: 100px;width: 100px">
                hello world
            </div>
        </am-dropdown>
        <am-dropdown trigger="hover">
            <am-button slot="reference">dropdown</am-button>
            <div slot="popover" style="height: 100px;width: 100px">
                hello world
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
