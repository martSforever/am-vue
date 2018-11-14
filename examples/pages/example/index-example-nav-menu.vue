<template>
    <div class="index-example-nav-menu">
        <am-scrollbar :scroll-x="false">
            <div class="index-example-nav-menu-content">
                <div v-for="(urlGroup,groupIndex) in urlGroups"
                     :key="groupIndex">
                    <div class="menu-group">
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
                            {name: 'color', icon: 'fas-palette', url: 'color'},
                            {name: 'icon', icon: 'fab-fonticons', url: 'icon'},
                            {name: 'button', icon: 'fab-youtube', url: 'button'},
                            {name: 'i18n', icon: 'fas-globe', url: 'i18n'},

                        ]
                    },
                    {
                        name: 'layout',
                        children: [
                            {name: 'grid', icon: 'fas-th', url: 'grid'},
                            {name: 'swiper', icon: 'fas-hand-paper', url: 'swiper'},
                            {name: 'tree', icon: 'fas-tree', url: 'tree'},
                            {name: 'table', icon: 'fas-table', url: 'table'},
                            {name: 'pagination', icon: 'fab-list-ol', url: 'pagination'},
                        ]
                    },
                    {
                        name: 'auto-table',
                        children: [
                            {name: 'auto-table', icon: 'fas-table', url: 'auto-table'},
                            {name: 'auto-table-lov', icon: 'fas-font', url: 'auto-table-lov'},
                            {name: 'auto-table-filter', icon: 'fas-filter', url: 'auto-table-filter-example'},
                            {name: 'object-pick', icon: 'fab-elementor', url: 'object-pick-example'},
                        ]
                    },
                    {
                        name: 'navigation',
                        children: [
                            {name: 'tab', icon: 'fas-map', url: 'tab'},
                            {name: 'scrollbar', icon: 'line', url: 'scrolbar'},
                        ]
                    },
                    {
                        name: 'form',
                        children: [
                            {name: 'input', icon: 'fas-keyboard', url: 'input'},
                            {name: 'number input', icon: 'fas-sort-numeric-down', url: 'number-input'},
                            {name: 'switch', icon: 'fas-toggle-on', url: 'switch'},
                            {name: 'radio', icon: 'fas-check-square', url: 'radio'},
                            {name: 'select', icon: 'fas-caret-square-down', url: 'select'},
                            {name: 'timepicker', icon: 'fas-clock', url: 'timepicker'},
                            {name: 'datepicker', icon: 'fas-calendar-alt', url: 'datepicker'},
                        ]
                    },
                    {
                        name: 'view',
                        children: [
                            {name: 'popover', icon: 'far-comment-alt', url: 'popover'},
                            {name: 'dropdown', icon: 'fas-comment-alt', url: 'dropdown'},
                            {name: 'collapse', icon: 'fas-chevron-down', url: 'collapse'},
                            {name: 'tag', icon: 'fas-tags', url: 'tag'},
                            {name: 'move', icon: 'fas-running', url: 'move'},
                            {name: 'notice', icon: 'fas-comment', url: 'notice'},
                            {name: 'modal', icon: 'fas-window-restore', url: 'modal'},
                            {name: 'avatar', icon: 'fas-user-circle', url: 'avatar'},
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
        overflow-x: hidden;
        border-right: solid 1px #ddd;
        .index-example-nav-menu-content {
            padding: 12px 0;
        }
        .menu-group {
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
                border-bottom: solid 1px #f2f2f2;
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
