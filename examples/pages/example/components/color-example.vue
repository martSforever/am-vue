<template>
    <div class="color-example example-page">
        <div class="color-group"
             v-for="(colorGroup,groupIndex) in colorGroups"
             :key="groupIndex">
            <div class="title">{{colorGroup.name}}</div>
            <div class="content">
                <div class="desc">{{colorGroup.desc}}</div>
                <div
                    class="color-item"
                    v-for="(color,colorIndex) in colorGroup.children"
                    :key="colorIndex"
                    :style="{backgroundColor:color.color}"
                    :class="{'black-color':colorIndex>3}">
                    <div>{{color.name}}</div>
                    <div>{{color.color}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'color-example',
        data() {
            return {
                colorGroups: [
                    {
                        name: '概述',
                        desc: 'am-vue 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件默认色调之间的视觉一致。',
                        children: []
                    },
                    {
                        name: '主色',
                        desc: 'am-vue 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。',
                        children: [
                            {name: 'Primary', color: '#2D8DF0'},
                            {name: 'Light Primary', color: '#f0faff'},
                            {name: 'Dark Primary', color: '#0F549C'},
                        ]
                    },
                    {
                        name: '辅助色',
                        desc: '辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。',
                        children: [
                            {name: 'Info', color: '#808695'},
                            {name: 'Success', color: '#43B973'},
                            {name: 'Warning', color: '#FFEE00'},
                            {name: 'Error', color: '#ED4114'},
                        ]
                    },
                    {
                        name: '中性色',
                        desc: '中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。',
                        children: [
                            {name: 'Title', color: '#17233d'},
                            {name: 'Content', color: '#515a6e'},
                            {name: 'Sub Color', color: '#808695'},
                            {name: 'Disabled', color: '#c5c8ce'},
                            {name: 'Border', color: '#dcdee2'},
                            {name: 'Divider', color: '#e8eaec'},
                            {name: 'Background', color: '#f8f8f9'},
                        ]
                    },
                ]
            };
        },
    };
</script>

<style lang="scss">
    .color-example {
        .content {
            .color-item {
                height: 64px;
                width: 200px;
                color: white;
                font-size: 14px;
                border-radius: 4px;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                padding: 12px;
                margin-right: 12px;
                &.black-color {
                    color: $color-normal-content;
                }
            }
        }
    }
</style>
