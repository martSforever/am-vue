<template>
    <span :class="[`${$amvue.$options.ComponentPrefix}-icon`]" :is="targetComponent" :icon="targetIcon"></span>
</template>

<script>
    import IconFontAwesome from './icon-font-awesome';
    import Iconfont from './iconfont';

    export default {
        name: 'icon',
        components: {Iconfont, IconFontAwesome},
        props: {
            icon: {
                type: String,
                required: true
            },
        },
        computed: {
            targetComponent() {
                if (/(fas-|far-)/.test(this.icon)) {
                    return 'IconFontAwesome';
                } else {
                    return 'Iconfont';
                }
            },
            targetIcon() {
                if (/(fas-|far-)/.test(this.icon)) {
                    let sperateIndex = this.icon.indexOf('-');
                    return [this.icon.slice(0, sperateIndex), this.icon.slice(sperateIndex + 1)];
                } else {
                    return this.icon;
                }
            },
        },
    };
</script>

<style lang="less">

</style>
