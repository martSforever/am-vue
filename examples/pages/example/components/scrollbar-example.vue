<template>
    <div class="scrollbar-example example-page">
        <div class="title">
            基本用法，默认情况下，scrollbar大小为父节点的大小，所以在使用的时候，容器节点最好只拥有scrollbar一个子节点，
            am-vue中，scrollbar用于特殊用于，仔细观察的同学应该发现了，滚动条的位置和浏览器标准的有点不一样，滚动条的位置是覆盖在内容上方的，
            这样设计的目的在于避免内容大小变化导致内容错位的情况出现
        </div>
        <div class="example-row">
            <div style="height: 100px;width: 300px">
                <am-scrollbar>
                    <div style="height: 200px;width: 600px;background-color: #ED4114"></div>
                </am-scrollbar>
            </div>
        </div>

        <div class="title">
            设置滚动条大小以及颜色
        </div>
        <div class="example-row">
            <div style="height: 100px;width: 300px">
                <am-scrollbar scrollbar-color="#f2f2f2" :scrollbar-size="5">
                    <div style="height: 200px;width: 600px;background-color: #ED4114"></div>
                </am-scrollbar>
            </div>
        </div>
        <div class="title">
            设置横向不滚动或者纵向不滚动
        </div>
        <div class="example-row">

            <div style="height: 100px;width: 300px;display: inline-block">
                <am-scrollbar :scroll-x="false">
                    <div style="height: 200px;width: 600px;background-color: #ED4114">
                        hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello
                        world!hello world!hello world!hello world!hello world!
                    </div>
                </am-scrollbar>
            </div>
            <div style="height: 100px;width: 300px;display: inline-block">
                <am-scrollbar :scroll-y="false">
                    <div style="height: 200px;width: 600px;background-color: #ED4114">
                        hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello
                        world!hello world!hello world!hello world!hello world!
                    </div>
                </am-scrollbar>
            </div>

        </div>

        <div class="title">
            综合测试，经过测试，当浏览器窗口大小变化、scrollbar的内容大小变化，scrollbar中图片加载延迟都不会影响scrollbar的正常使用
        </div>
        <div>
            <am-button-group>
                <am-button @click="add">add</am-button>
                <am-button>vertical:{{list.length}}</am-button>
                <am-button @click="remove">remove</am-button>
            </am-button-group>
            <am-button-group>
                <am-button @click="add2">add</am-button>
                <am-button>horizontal:{{list2.length}}</am-button>
                <am-button @click="remove2">remove</am-button>
            </am-button-group>
            <am-button-group>
                <am-button @click="$refs.scrollbar.scrollTo({x:0,y:0})">scrollTo:0</am-button>
            </am-button-group>
        </div>
        <div style="width: 1000px;height: 600px">
            <am-scrollbar ref="scrollbar">
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

            i = 4;
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
