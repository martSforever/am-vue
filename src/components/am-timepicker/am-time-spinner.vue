<template>
    <div class="am-time-spinner">
        <am-scrollbar
            :scroll-x="false"
            :scrollbar-size="6"
            ref="scrollbar"
        >
            <div class="am-time-spinner-item"
                 ref="items"
                 :class="{'am-time-spinner-item-active':currentValue === item,'am-time-spinner-item-hide':item===-1}"
                 @click="item !== -1 && handleClick(item,index)"
                 v-for="(item,index) in list"
                 :key="index">
                {{item}}
            </div>
        </am-scrollbar>
    </div>
</template>

<script>
    import AmScrollbar from '../am-scrollbar'

    export default {
        name: "am-time-spinner",
        components: {
            AmScrollbar
        },
        props: {
            num: {type: Number, default: 60},
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
                list: [],
                currentValue: this.value,
            }
        },
        mounted() {
            let i = 0
            while (i < this.num) this.list.push(i++)
            this.list.unshift(-1)
            this.list.unshift(-1)
            this.list.push(-1)
            this.list.push(-1)
        },
        methods: {
            handleClick(item, index) {
                this.currentValue = item
                this.updatePosition()
            },
            navTo(item) {
                this.$refs.scrollbar.scrollTo({y: this.$refs.items[item].offsetTop})
            },
            updatePosition() {
                this.navTo(this.currentValue)
            },
        },
    }
</script>
