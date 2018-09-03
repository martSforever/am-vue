<template>
    <div class="app" :style="{fontFamily:PFFontFamily}">
        <router-view/>
    </div>
</template>
<script>
    import PFFontFamily from 'examples/styles/library/PingFang Medium.ttf';


    export default {
        name: 'app',
        data() {
            return {
                PFFontFamily
            };
        },
    };
</script>

<style lang="less">

</style>
