<template>
    <div class="index-example-nav-menu">
        <div v-for="(item,index) in urls" :key="index" class="menu-item" @click="handleClick(item)">
            <div class="left-side">
                <am-icon :icon="item.icon"/>
                <span>{{item.name}}</span>
            </div>
            <am-icon icon="fas-angle-right" color="#999"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index-example-nav-menu',
        data() {
            return {
                urls: [
                    {name: 'icon图标', icon: 'fas-heart', url: 'icon'},
                    {name: 'input输入框', icon: 'fas-keyboard', url: 'input'},
                    {name: 'button按钮', icon: 'fab-youtube', url: 'icon'},
                    {name: 'grid栅格系统', icon: 'fas-th', url: 'icon'},
                    {name: 'scrollbar滚动条', icon: 'fas-underline', url: 'icon'},
                    {name: 'textarea文本框', icon: 'fas-file-alt', url: 'icon'},
                    {name: 'carousel轮播', icon: 'fas-columns', url: 'icon'},
                    {name: 'switch开关', icon: 'fas-toggle-on', url: 'icon'},
                    {name: 'modal模态对话框', icon: 'fas-window-maximize', url: 'icon'},
                    {name: 'radio单选多选', icon: 'fas-check-square', url: 'icon'},
                    {name: 'popover浮动框', icon: 'fas-comment-alt', url: 'icon'},
                    {name: 'collapse折叠', icon: 'fas-minus-square', url: 'icon'},
                    {name: 'select选择框', icon: 'fas-hand-pointer', url: 'icon'},
                    {name: 'dropdown下拉框', icon: 'fas-caret-square-down', url: 'icon'},
                    {name: 'timepicker时间选择', icon: 'fas-clock', url: 'icon'},
                    {name: 'datepicker日期选择', icon: 'fas-calendar-alt', url: 'icon'},
                    {name: 'tabs页签', icon: 'fas-window-restore', url: 'icon'},
                    {name: 'i18n国际化', icon: 'fas-globe', url: 'icon'},
                    {name: 'avatar头像', icon: 'fas-user-circle', url: 'icon'},
                    {name: 'tree树', icon: 'fas-tree', url: 'icon'},
                    {name: 'tag标签', icon: 'fas-tag', url: 'icon'},
                    {name: 'move列表动画', icon: 'fas-dove', url: 'icon'},
                    {name: 'notice通知', icon: 'fas-bell', url: 'icon'},
                ]
            };
        },
        methods: {
            handleClick(item) {
                this.$router.push(item.url);
            },
        },
    };
</script>

<style lang="less">
    .index-example-nav-menu {
        height: 100%;
        width: 220px;
        overflow-y: auto;
        border-right: solid 1px #ddd;
        padding-top: 24px;
        .menu-item {
            width: 100%;
            padding: 0 12px;
            height: 36px;
            line-height: 36px;
            text-align: start;
            transition: all 0.15s;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #666;
            .left-side {
                & > .am-icon {
                    margin-right: 12px;
                }
            }
            &:hover {
                background-color: #e2e8f1;
                cursor: pointer;
                color: black !important;
                .am-icon {
                    color: black !important;
                }
            }
        }
    }
</style>
