<template>
    <am-scrollbar :scroll-x="false"
                  ref="scrollbar"
                  class="am-year-pannel">
        <div class="am-year-pannel-content-wrapper">
            <div class="am-year-panel-item"
                 v-for="(item,index) in list"
                 :key="index"
            >
                {{item}}
            </div>
        </div>
    </am-scrollbar>
</template>

<script>
    import AmScrollbar from '../am-scrollbar'

    export default {
        name: "am-year-pannel",
        components: {
            AmScrollbar,
        },
        props: {
            value: {},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                currentValue: this.value,
                list: [],
            }
        },
        mounted() {
            let start = this.currentValue - 13
            let num = 27
            for (let i = start; i < num + start; i++) {
                this.list.push(i)
            }
        },
    }
</script>
