<template>
    <am-scrollbar :scroll-x="false"
                  ref="scrollbar"
                  @vertical-scroll-top="addPreviousYears"
                  @vertical-scroll-bottom="addNextYears"
                  class="am-year-panel">
        <div class="am-year-panel-content-wrapper" ref="wrapper">
            <div class="am-year-panel-item-wrapper" v-for="(item,index) in list" :key="index">
                <div class="am-year-panel-item"
                     ref="items"
                     :class="{'am-year-panel-item-active':item === currentValue,'am-year-panel-item-now':nowYear===item}"
                     @click="handleClickItem(item,index)">
                    {{item}}
                </div>
            </div>
        </div>
    </am-scrollbar>
</template>

<script>
    import AmScrollbar from '../am-scrollbar'

    const dateWidth = 32;

    export default {
        name: "am-year-panel",
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
                this.updatePosition()
            },
        },
        data() {
            const defaultNum = 15;
            return {
                currentValue: null,
                list: [],
                start: this.value - Math.floor(defaultNum * 1.5),
                num: defaultNum,
                nowYear: new Date().getFullYear()
            }
        },
        mounted() {
            for (let i = this.start; i < this.start + this.num * 3; i++) {
                this.list.push(i)
            }
            this.$nextTick(() => this.handleClickItem(this.value))
        },
        methods: {
            addPreviousYears() {
                let currentScrolllTop = this.$refs.scrollbar.contentWrapperScrollTop
                const newStart = this.start - this.num
                for (let i = this.start - 1; i >= newStart; i--) {
                    this.list.unshift(i)
                }
                this.start = newStart
                this.$nextTick(() => {
                    this.$refs.scrollbar.$refs.wrapper.scrollTop = currentScrolllTop + this.$el.offsetHeight
                })
            },
            addNextYears() {
                let addStart = this.list[this.list.length - 1]
                for (let i = 0; i < this.num; i++) {
                    this.list.push(++addStart)
                }
            },
            updatePosition() {
                this.$nextTick(()=>{
                    const targetItemRef = this.$refs.items[this.currentIndex - 6]
                    this.$refs.scrollbar.scrollTop(targetItemRef.offsetTop)
                })
            },
            handleClickItem(item) {
                this.currentValue = item
            },
        },
        computed: {
            currentIndex() {
                return this.list.indexOf(this.currentValue)
            },
        },
    }
</script>
