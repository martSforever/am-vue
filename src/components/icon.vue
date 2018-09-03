<template>
    <span :class="classes" :is="targetComponent" :icon="targetIcon" :style="styles"></span>
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
            loading: {
                type: Boolean,
                default: false
            },
            size: null,
            color: null,
        },
        computed: {
            targetComponent() {
                if (/(fas-|far-|fab-)/.test(this.icon)) {
                    return 'IconFontAwesome';
                } else {
                    return 'Iconfont';
                }
            },
            targetIcon() {
                if (/(fas-|far-|fab-)/.test(this.icon)) {
                    let sperateIndex = this.icon.indexOf('-');
                    return [this.icon.slice(0, sperateIndex), this.icon.slice(sperateIndex + 1)];
                } else {
                    return this.icon;
                }
            },
            classes() {
                return [
                    `${this.$amvue.$options.ComponentPrefix}-icon`,
                    {
                        [`${this.$amvue.$options.ComponentPrefix}-icon-loading`]: this.loading,
                    }
                ];
            },
            styles() {
                let ret = {};
                !!this.size && (ret.fontSize = this.size);
                !!this.color && (ret.color = this.color);
                return ret;
            },
        },
    };
</script>
