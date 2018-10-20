<template>
    <div class="am-auto-table-filter">
        {{queryOrders}}
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

            <keep-alive>
                <div :is="searchCol.filterComponent" shape="none" type="fill" :color="color" :size="size" :placeholder="placeholder" @confirm="handleFilterConfirm" ref="filter"/>
            </keep-alive>
            <am-button icon="fas-search" :icon-only="true" color="info" :size="size" @click="getFilterData"/>
        </am-button>
    </div>
</template>

<script>


    export default {
        name: "am-auto-table-filter",
        components: {},
        props: {
            searchCols: {type: Array, default: () => []},
            size: {type: String, default: 'small'},
            color: {type: String, default: 'info'},
            placeholder: {type: String, default: '搜索关键字'},
            queryOrders: {type: Array, default: () => []},
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
            handleFilterConfirm() {
                this.getFilterData();
            },
            getFilterData() {
                const filterData = this.$refs.filter.getValue()
                if (!!filterData) {
                    this.queryOrders.push(Object.assign({
                        field: this.searchCol.field,
                        operator: '=',
                        dateFormat: false,
                    }, filterData))
                    this.$emit('confirm')
                }
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
