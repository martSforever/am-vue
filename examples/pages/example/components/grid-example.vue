<template>
    <div class="grid-example example-page">

        <div class="title">栅格系统</div>
        <am-row>
            <am-col span="3">
                <div class="col">col-3</div>
            </am-col>
            <am-col span="4">
                <div class="col">col-4</div>
            </am-col>
            <am-col span="5">
                <div class="col">col-5</div>
            </am-col>
            <am-col span="6">
                <div class="col">col-6</div>
            </am-col>
            <am-col span="6">
                <div class="col">col-6</div>
            </am-col>
        </am-row>
        <div class="title">栅格间隔(单位px)</div>
        <am-row gutter="16">
            <am-col span="3">
                <div class="col">col-3</div>
            </am-col>
            <am-col span="4">
                <div class="col">col-4</div>
            </am-col>
            <am-col span="5">
                <div class="col">col-5</div>
            </am-col>
            <am-col span="6">
                <div class="col">col-6</div>
            </am-col>
            <am-col span="6">
                <div class="col">col-6</div>
            </am-col>
        </am-row>

        <div class="title">flex布局的栅格</div>
        <am-row flex align="top">
            <am-col span="3">
                <div class="col" style="height: 36px">col-3</div>
            </am-col>
            <am-col span="4">
                <div class="col" style="height: 48px">col-4</div>
            </am-col>
            <am-col span="5">
                <div class="col" style="height: 64px">col-5 align:top</div>
            </am-col>
            <am-col span="6">
                <div class="col" style="height: 48px">col-6</div>
            </am-col>
            <am-col span="6">
                <div class="col" style="height: 36px">col-6</div>
            </am-col>
        </am-row>
        <am-row flex align="middle">
            <am-col span="3">
                <div class="col" style="height: 36px">col-3</div>
            </am-col>
            <am-col span="4">
                <div class="col" style="height: 48px">col-4</div>
            </am-col>
            <am-col span="5">
                <div class="col" style="height: 64px">col-5 align:middle</div>
            </am-col>
            <am-col span="6">
                <div class="col" style="height: 48px">col-6</div>
            </am-col>
            <am-col span="6">
                <div class="col" style="height: 36px">col-6</div>
            </am-col>
        </am-row>
        <am-row flex align="bottom">
            <am-col span="3">
                <div class="col" style="height: 36px">col-3</div>
            </am-col>
            <am-col span="4">
                <div class="col" style="height: 48px">col-4</div>
            </am-col>
            <am-col span="5">
                <div class="col" style="height: 64px">col-5 align:bottom</div>
            </am-col>
            <am-col span="6">
                <div class="col" style="height: 48px">col-6</div>
            </am-col>
            <am-col span="6">
                <div class="col" style="height: 36px">col-6</div>
            </am-col>
        </am-row>

        <div class="title">flex justify-content</div>
        <am-row flex justify="space-between">
            <am-col span="3">
                <div class="col">col-3</div>
            </am-col>
            <am-col span="4">
                <div class="col">col-4</div>
            </am-col>

            <am-col span="6">
                <div class="col">col-6</div>
            </am-col>
            <am-col span="3">
                <div class="col">col-3</div>
            </am-col>
        </am-row>
        <div class="title">当使用flex布局时，可以使用order属性排序</div>
        <am-row flex justify="start">
            <am-col span="2">
                <div class="col">col-2</div>
            </am-col>
            <am-col span="4">
                <div class="col">col-4</div>
            </am-col>

            <am-col span="6">
                <div class="col">col-6</div>
            </am-col>
            <am-col span="3">
                <div class="col">col-3</div>
            </am-col>
        </am-row>
        <am-row flex justify="start">
            <am-col span="2" order="9">
                <div class="col">col-2</div>
            </am-col>
            <am-col span="4" order="8">
                <div class="col">col-4</div>
            </am-col>

            <am-col span="6" order="7">
                <div class="col">col-6</div>
            </am-col>
            <am-col span="3" order="6">
                <div class="col">col-3</div>
            </am-col>
        </am-row>

        <div class="title">当使用浮动布局时，可以使用pull以及push属性排序</div>
        <am-row flex gutter="16">
            <am-col span="2" push="10">
                <div class="col">col-2</div>
            </am-col>
            <am-col span="4" pull="2">
                <div class="col">col-4</div>
            </am-col>

            <am-col span="6" pull="2">
                <div class="col">col-6</div>
            </am-col>
        </am-row>

        <div class="title">响应式布局，可以用chrome把客户端变成移动端模式，当为普通模式时，分别占2,4,6格，当为移动端时，分别占4,8,12格</div>
        <div class="title">2,4,6占整个容器的宽度一半，二4,8,12占满容器宽度，可以试一试</div>
        <am-row flex gutter="16">
            <am-col span="2" :xs="4">
                <div class="col">col-2</div>
            </am-col>
            <am-col span="4" :xs="8">
                <div class="col">col-4</div>
            </am-col>

            <am-col span="6" :xs="12">
                <div class="col">col-6</div>
            </am-col>
        </am-row>

    </div>
</template>

<script>
    export default {
        name: 'grid-example',
        methods: {
            getRandomColor() {
                return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
            },
        },
    };
</script>

<style lang="scss">
    .grid-example {
        .am-row {
            .col {
                text-align: center;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 64px;
            }
            .am-col {
                margin-bottom: 24px;
                &:nth-child(even) {
                    .col {
                        background-color: $color-normal-content;
                    }
                }
                &:nth-child(odd) {
                    .col {
                        background-color: $color-normal-sub-color;
                    }
                }
            }
        }
    }
</style>
