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
                    {name: 'color', icon: 'color-board', url: 'color'},
                    {name: 'icon', icon: 'color-drink', url: 'icon'},
                    {name: 'input', icon: 'color-keyboard', url: 'input'},
                    {name: 'button', icon: 'color-play', url: 'icon'},
                    {name: 'grid', icon: 'color-grid', url: 'icon'},
                    {name: 'scrollbar', icon: 'color-swip', url: 'icon'},
                    {name: 'textarea', icon: 'color-textarea', url: 'icon'},
                    {name: 'carousel', icon: 'color-board', url: 'icon'},
                    {name: 'switch', icon: 'color-switch', url: 'icon'},
                    {name: 'modal', icon: 'color-modal', url: 'icon'},
                    {name: 'radio', icon: 'color-checked', url: 'icon'},
                    {name: 'popover', icon: 'color-popover', url: 'icon'},
                    {name: 'collapse', icon: 'color-collapse', url: 'icon'},
                    {name: 'select', icon: 'color-select', url: 'icon'},
                    {name: 'dropdown', icon: 'color-droplet', url: 'icon'},
                    {name: 'timepicker', icon: 'color-time', url: 'icon'},
                    {name: 'datepicker', icon: 'color-date', url: 'icon'},
                    {name: 'tabs', icon: 'color-tabs', url: 'icon'},
                    {name: 'i18n', icon: 'color-net', url: 'icon'},
                    {name: 'avatar', icon: 'color-avatar', url: 'icon'},
                    {name: 'tree', icon: 'color-tree', url: 'icon'},
                    {name: 'tag', icon: 'color-tag', url: 'icon'},
                    {name: 'move', icon: 'color-run', url: 'icon'},
                    {name: 'notice', icon: 'color-notice', url: 'icon'},
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
