<template>
    <div class="am-auto-table-filter">
        {{searchCol}}
        <!--筛选-->
        <am-button type="fill" color="info" :size="size" :shade-on-click="false" :click-effect="false" :no-border="true" :no-padding="true">
            <am-select
                :size="size"
                suffix-icon="fas-angle-down"
                placeholder="搜索类型"
                :width="60"
                shape="none"
                type="fill"
                color="info"
                :data="searchCols"
                show-key="title"
                :value="!!searchCol?searchCol.title:null"

                @select="handleSelect"
            />

            <am-input :size="size" shape="none" type="fill" color="info" placeholder="搜索关键字"/>
            <am-button icon="fas-search" :icon-ocly="true" color="info" :size="size"/>
        </am-button>
    </div>
</template>

<script>
    export default {
        name: "am-auto-table-filter",
        props: {
            searchCols: {type: Array, default: () => []},
            size: {type: String, default: 'small'},

        },
        watch: {},
        data() {
            return {
                searchCol: this.searchCols.length > 0 ? this.searchCols[0] : null,
            }
        },
        methods: {
            handleSelect(cols) {
                this.searchCol = cols[0]
            },
        },
    }
</script>

<style lang="scss">
    .am-auto-table-filter {
        display: inline-flex;
        align-items: center;
        .am-select, .am-icon {
            cursor: pointer;
        }
    }
</style>
