<template>
    <span class="am-icon"
          :class="classes"
          :is="targetComponent"
          :icon="targetIcon"
          :style="styles"
          @click.native="e=>$emit('click',e)"></span>
</template>

<script>
    import IconFontAwesome from './am-fontawesome';
    import Iconfont from './am-iconfont';

    export default {
        name: 'am-icon',
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
                    {
                        [`am-icon-loading`]: this.loading,
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
