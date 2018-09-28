<template>
    <div class="am-tabbar-head-item">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentUpward} from '../../scripts/dom';

    export default {
        name: 'am-tabbar-head-item',
        mounted() {
            let head = findComponentUpward(this, 'am-tabbar-head');
            this.width = this.$el.offsetWidth;
            head.addItem(this);
        },
    };
</script>
