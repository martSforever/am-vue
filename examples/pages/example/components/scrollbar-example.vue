<template>
    <div class="scrollbar-example example-page">
        <am-scrollbar>
            <am-button-group>
                <am-button @click="add">add</am-button>
                <am-button>{{list.length}}</am-button>
                <am-button @click="remove">remove</am-button>
            </am-button-group>
            <am-button-group>
                <am-button @click="add2">add</am-button>
                <am-button>{{list2.length}}</am-button>
                <am-button @click="remove2">remove</am-button>
            </am-button-group>
            <div style="width: max-content;white-space: nowrap">
                <div v-for="item in list2" class="h-item">
                    <img :src="item">
                </div>
            </div>
            <div class="item" v-for="item in list">
                <img :src="item">
            </div>
        </am-scrollbar>
    </div>
</template>

<script>

    const imageUrl = 'http://www.pujia8.com/static/pics/20171215040134_26.jpg';
    const image2 = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=902852676,3612482722&fm=26&gp=0.jpg'

    export default {
        name: "scrollbar-example",
        data() {
            return {
                list: [],
                list2: [],
            }
        },
        mounted() {
            let i = 3;
            while (i > 0) {
                this.list.push(image2)
                i--
            }

            i = 3;
            while (i > 0) {
                this.list2.push(image2)
                i--
            }
        },
        methods: {
            add() {
                this.list.unshift(`${image2}?time=${this.getTime()}`)
            },
            remove() {
                this.list.shift()
            },
            add2() {
                this.list2.unshift(`${image2}?time=${this.getTime()}`)
            },
            remove2() {
                this.list2.shift()
            },
            getTime() {
                return new Date().getTime();
            },
        },
    }
</script>

<style lang="scss">
    .scrollbar-example {
        .item {
            background-color: #f2f2f2;
            color: black;
            img {
                display: block;
            }
        }
        .h-item {
            display: inline-block;
        }
    }
</style>
