<template>
    <div class="index-example-nav-menu">
        <div v-for="(urlGroup,groupIndex) in urlGroups"
             :key="groupIndex">
            <div class="menu-group">
                <span class="group-name">{{urlGroup.name}}</span>
                <div v-for="(item,itemIndex) in urlGroup.children"
                     :key="itemIndex"
                     @click="handleClick(item)"
                     :class="{active:item.url === currentUrl}"
                     class="menu-item">
                    <div class="left-side">
                        <am-icon :icon="item.icon"/>
                        <span>{{item.name}}</span>
                    </div>
                </div>
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
                urlGroups: [
                    {
                        name: 'base',
                        children: [
                            {name: 'color', icon: 'color-board', url: 'color'},
                            {name: 'icon', icon: 'color-drink', url: 'icon'},
                            {name: 'button', icon: 'color-play', url: 'button'},
                            {name: 'i18n', icon: 'color-net', url: ''},

                        ]
                    },
                    {
                        name: 'layout',
                        children: [
                            {name: 'grid', icon: 'color-grid', url: ''},
                            {name: 'carousel', icon: 'color-window', url: ''},
                            {name: 'tree', icon: 'color-tree', url: ''},

                        ]
                    },
                    {
                        name: 'navigation',
                        children: [
                            {name: 'tabs', icon: 'color-tabs', url: ''},
                            {name: 'scrollbar', icon: 'color-swip', url: ''},
                        ]
                    },
                    {
                        name: 'form',
                        children: [
                            {name: 'input', icon: 'color-keyboard', url: 'input'},
                            {name: 'textarea', icon: 'color-textarea', url: ''},
                            {name: 'switch', icon: 'color-switch', url: ''},
                            {name: 'modal', icon: 'color-modal', url: ''},
                            {name: 'radio', icon: 'color-checked', url: ''},
                            {name: 'select', icon: 'color-select', url: ''},
                            {name: 'timepicker', icon: 'color-time', url: ''},
                            {name: 'datepicker', icon: 'color-date', url: ''},
                        ]
                    },
                    {
                        name: 'view',
                        children: [
                            {name: 'popover', icon: 'color-popover', url: ''},
                            {name: 'dropdown', icon: 'color-droplet', url: ''},
                            {name: 'collapse', icon: 'color-collapse', url: ''},
                            {name: 'tag', icon: 'color-tag', url: ''},
                            {name: 'move', icon: 'color-run', url: ''},
                            {name: 'notice', icon: 'color-notice', url: ''},
                            {name: 'avatar', icon: 'color-avatar', url: ''},
                        ]
                    },
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
        .menu-group {
            padding: 0 0 0 12px;
            .group-name {
                color: @color-normal-title;
                height: 36px;
                line-height: 36px;
            }
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

    }
</style>
