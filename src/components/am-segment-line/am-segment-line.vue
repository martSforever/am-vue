<template>
    <div class="am-segment-line" :style="styles"></div>
</template>

<script>
    export default {
        name: "am-segment-line",
        props: {
            width: {default: '1px'},
            vertical: {type: Boolean}
        },
        computed: {
            styles() {
                let styles = {}
                if (!!this.vertical) {
                    styles.height = '100%'
                    styles.width = this.width
                } else {
                    styles.width = '100%'
                    styles.height = this.width
                }
                return styles
            },
        },
    }
</script>
