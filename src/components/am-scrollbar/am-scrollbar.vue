<template>
    <div class="am-scrollbar">
        <div class="am-scrollbar-content-wrapper" ref="content">
            <span>width：{{width}}，height:{{height}}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const elementResizeDetectorMaker = require("element-resize-detector");
    let erdUltraFast = elementResizeDetectorMaker({strategy: "scroll"});

    export default {
        name: "am-scrollbar",
        data() {
            return {
                width: 0,
                height: 0,
            }
        },
        mounted() {
            erdUltraFast.listenTo(this.$refs.content, (element) => {
                console.log('resize')
                this.width = element.offsetWidth;
                this.height = element.offsetHeight;
            });
        },
    }
</script>
