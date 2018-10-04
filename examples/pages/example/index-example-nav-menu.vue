<template>
    <div class="index-example-nav-menu">
        <am-scrollbar>
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
        </am-scrollbar>
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
                            {name: 'i18n', icon: 'color-net', url: 'i18n'},

                        ]
                    },
                    {
                        name: 'layout',
                        children: [
                            {name: 'grid', icon: 'color-grid', url: 'grid'},
                            {name: 'swiper', icon: 'color-window', url: 'swiper'},
                            {name: 'tree', icon: 'color-tree', url: 'tree'},
                            {name: 'table', icon: 'color-table', url: ''},

                        ]
                    },
                    {
                        name: 'navigation',
                        children: [
                            {name: 'tab', icon: 'color-tabs', url: 'tab'},
                            {name: 'scrollbar', icon: 'color-swip', url: 'scrolbar'},
                        ]
                    },
                    {
                        name: 'form',
                        children: [
                            {name: 'input', icon: 'color-keyboard', url: 'input'},
                            {name: 'number input', icon: 'number-nine', url: 'number-input'},
                            {name: 'switch', icon: 'color-switch', url: 'switch'},
                            {name: 'radio', icon: 'color-checked', url: 'radio'},
                            {name: 'select', icon: 'color-select', url: 'select'},
                            {name: 'timepicker', icon: 'color-time', url: ''},
                            {name: 'datepicker', icon: 'color-date', url: ''},
                        ]
                    },
                    {
                        name: 'view',
                        children: [
                            {name: 'popover', icon: 'color-popover', url: 'popover'},
                            {name: 'dropdown', icon: 'color-droplet', url: 'dropdown'},
                            {name: 'collapse', icon: 'color-collapse', url: 'collapse'},
                            {name: 'tag', icon: 'color-tag', url: 'tag'},
                            {name: 'move', icon: 'color-run', url: 'move'},
                            {name: 'notice', icon: 'color-notice', url: 'notice'},
                            {name: 'modal', icon: 'color-modal', url: 'modal'},
                            {name: 'avatar', icon: 'color-avatar', url: 'avatar'},
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

<style lang="scss">
    .index-example-nav-menu {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 220px;
        box-sizing: border-box;

        overflow-y: auto;
        border-right: solid 1px #ddd;
        padding: 24px 0;
        .menu-group {
            padding: 0 0 0 12px;
            .group-name {
                color: $color-normal-title;
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
                color: $color-normal-sub-color;
                @include transition-all();
                .left-side {
                    & > .am-icon {
                        margin-right: 12px;
                    }
                }
                &:hover {
                    background-color: $color-primary-light;
                    cursor: pointer;
                    color: $color-primary-dark !important;
                    .am-icon {
                        color: black !important;
                    }
                }
                &.active {
                    border-right: solid 4px $color-primary;
                    background-color: $color-primary-light;
                }
            }
        }

    }
</style>
