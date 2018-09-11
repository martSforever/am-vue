<template>
    <div class="index-example-nav-menu">
        <div v-for="(item,index) in urls" :key="index" class="menu-item" @click="handleClick(item)"
             :class="{active:item.url === currentUrl}">
            <div class="left-side">
                <am-icon :icon="item.icon"/>
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index-example-nav-menu',
        data() {
            return {
                currentUrl: null,
                urls: [
                    {name: 'color', icon: 'color-board', url: 'color'},
                    {name: 'icon', icon: 'color-drink', url: 'icon'},
                    {name: 'input', icon: 'color-keyboard', url: 'input'},
                    {name: 'button', icon: 'color-play', url: ''},
                    {name: 'grid', icon: 'color-grid', url: ''},
                    {name: 'scrollbar', icon: 'color-swip', url: ''},
                    {name: 'textarea', icon: 'color-textarea', url: ''},
                    {name: 'carousel', icon: 'color-window', url: ''},
                    {name: 'switch', icon: 'color-switch', url: ''},
                    {name: 'modal', icon: 'color-modal', url: ''},
                    {name: 'radio', icon: 'color-checked', url: ''},
                    {name: 'popover', icon: 'color-popover', url: ''},
                    {name: 'collapse', icon: 'color-collapse', url: ''},
                    {name: 'select', icon: 'color-select', url: ''},
                    {name: 'dropdown', icon: 'color-droplet', url: ''},
                    {name: 'timepicker', icon: 'color-time', url: ''},
                    {name: 'datepicker', icon: 'color-date', url: ''},
                    {name: 'tabs', icon: 'color-tabs', url: ''},
                    {name: 'i18n', icon: 'color-net', url: ''},
                    {name: 'avatar', icon: 'color-avatar', url: ''},
                    {name: 'tree', icon: 'color-tree', url: ''},
                    {name: 'tag', icon: 'color-tag', url: ''},
                    {name: 'move', icon: 'color-run', url: ''},
                    {name: 'notice', icon: 'color-notice', url: ''},
                ]
            };
        },
        methods: {
            handleClick(item) {
                this.$router.push(item.url);
                this.currentUrl = item.url;
            },
        },
        mounted() {
            this.currentUrl = this.$router.history.current.path.slice(1);
        },
    };
</script>

<style lang="less">
    .index-example-nav-menu {
        height: 100%;
        width: 220px;
        overflow-y: auto;
        border-right: solid 1px #ddd;
        padding: 24px 0;
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
            color: @color-normal-sub-color;
            .transition-all();
            .left-side {
                & > .am-icon {
                    margin-right: 12px;
                }
            }
            &:hover {
                background-color: @color-primary-light;
                cursor: pointer;
                color: @color-primary-dark !important;
                .am-icon {
                    color: black !important;
                }
            }
            &.active {
                border-right: solid 4px @color-primary;
                background-color: @color-primary-light;
            }
        }
    }
</style>
