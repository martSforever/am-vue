<template>
    <div class="am-tabbar-head-item">
        <span>{{tab.title}}</span>
        <am-icon icon="fas-times" class="am-tabbar-head-item-close-icon" @click.stop="handleClickCloseIcon"/>
    </div>
</template>

<script>
    import {findComponentUpward} from '../../scripts/dom';

    export default {
        name: 'am-tabbar-head-item',
        props: {
            tab: {},
        },
        mounted() {
            let head = findComponentUpward(this, 'am-tabbar-head');
            this.width = this.$el.offsetWidth;
            head.addItem(this);
        },
        methods: {
            handleClickCloseIcon() {
                this.$emit('close');
            },
        },
    };
</script>
