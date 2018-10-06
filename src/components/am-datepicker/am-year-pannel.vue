<template>
    <am-scrollbar :scroll-x="false"
                  ref="scrollbar"
                  class="am-year-pannel">
        <div class="am-year-pannel-content-wrapper">
            <div class="am-year-panel-item"
                 v-for="(item,index) in list"
                 :class="{'am-year-panel-item-active':item === currentValue}"
                 :key="index"
            >
                {{item}}
            </div>
        </div>
    </am-scrollbar>
</template>

<script>
    import AmScrollbar from '../am-scrollbar'

    const dateWidth = 32;

    export default {
        name: "am-year-pannel",
        components: {
            AmScrollbar,
        },
        props: {
            value: {type: Number, default: () => new Date().getFullYear()},
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
            const defaultNum = 15;
            return {
                currentValue: this.value,
                list: [],
                start: this.value - Math.floor(defaultNum * 1.5),
                num: defaultNum,
            }
        },
        mounted() {
            for (let i = this.start; i < this.start + this.num * 3; i++) {
                this.list.push(i)
            }
        },
        methods: {
            addPreviousYears() {
                const newStart = this.start - this.num
                for (let i = this.start - 1; i >= newStart; i--) {
                    this.list.unshift(i)
                }
            },
        },
    }
</script>
