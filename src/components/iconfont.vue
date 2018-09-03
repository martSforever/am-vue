<template>
    <svg class="iconfont" aria-hidden="true">
        <use :xlink:href="'#'+$amvue.$options.IconfontPrefix+'-'+icon"></use>
    </svg>
</template>

<script>
    export default {
        name: 'iconfont',
        props: {
            icon: {
                type: String,
                required: true
            },
        },
    };
</script>

<style lang="less">
    .iconfont {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
