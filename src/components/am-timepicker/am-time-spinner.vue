<template>
    <div class="am-time-spinner" style="height: 140px;width: 44px">
        <am-scrollbar
            :scroll-x="false"
            :scrollbar-size="6"
        >
            <div class="am-time-spinner-item" v-for="(item,index) in list" :key="index">
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
            num: {type: Number, default: 60}
        },
        data() {
            return {
                list: []
            }
        },
        mounted() {
            let i = 0
            while (i < this.num) this.list.push(i++)
        },
    }
</script>
