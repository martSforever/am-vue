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
                    {name: 'icon', icon: 'fas-heart', url: 'icon'},
                    {name: 'input', icon: 'fas-keyboard', url: 'input'},
                    {name: 'button', icon: 'fab-youtube', url: 'icon'},
                    {name: 'grid', icon: 'fas-th', url: 'icon'},
                    {name: 'scrollbar', icon: 'fas-underline', url: 'icon'},
                    {name: 'textarea', icon: 'fas-file-alt', url: 'icon'},
                    {name: 'carousel', icon: 'fas-columns', url: 'icon'},
                    {name: 'switch', icon: 'fas-toggle-on', url: 'icon'},
                    {name: 'modal', icon: 'fas-window-maximize', url: 'icon'},
                    {name: 'radio', icon: 'fas-check-square', url: 'icon'},
                    {name: 'popover', icon: 'fas-comment-alt', url: 'icon'},
                    {name: 'collapse', icon: 'fas-minus-square', url: 'icon'},
                    {name: 'select', icon: 'fas-hand-pointer', url: 'icon'},
                    {name: 'dropdown', icon: 'fas-caret-square-down', url: 'icon'},
                    {name: 'timepicker', icon: 'fas-clock', url: 'icon'},
                    {name: 'datepicker', icon: 'fas-calendar-alt', url: 'icon'},
                    {name: 'tabs', icon: 'fas-window-restore', url: 'icon'},
                    {name: 'i18n', icon: 'fas-globe', url: 'icon'},
                    {name: 'avatar', icon: 'fas-user-circle', url: 'icon'},
                    {name: 'tree', icon: 'fas-tree', url: 'icon'},
                    {name: 'tag', icon: 'fas-tag', url: 'icon'},
                    {name: 'move', icon: 'fas-dove', url: 'icon'},
                    {name: 'notice', icon: 'fas-bell', url: 'icon'},
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
