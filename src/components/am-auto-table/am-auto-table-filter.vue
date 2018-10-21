<template>
    <div class="am-auto-table-filter">
        <!--筛选-->
        <am-button type="fill" color="info" :size="size" :shade-on-click="false" :click-effect="false" :no-border="true" :no-padding="true">
            <am-select
                :size="size"
                suffix-icon="fas-angle-down"
                placeholder="搜索类型"
                :width="60"
                shape="none"
                type="fill"
                :color="color"
                :data="searchCols"
                show-key="title"
                :value="!!searchCol?searchCol.title:null"

                @select="handleSelect"
            />

            <keep-alive>
                <div
                    ref="filter"
                    :is="!!searchCol?searchCol.filterComponent:'am-auto-table-filter-input'"
                    :filter-option="!!searchCol?searchCol.filterOption:{}"
                    shape="none"
                    type="fill"
                    :color="color"
                    :size="size"
                    :placeholder="placeholder"
                    v-model="searchValue"
                    @confirm="handleFilterConfirm"/>
            </keep-alive>
            <am-button icon="fas-search" :color="color" :size="size" @click="getFilterData"/>
            <am-tag-input
                ref="input"
                :tags="queryFilters"
                shape="none"
                type="fill"
                :color="color"
                :size="size"
                @delete="handleFilterDelete"
                @confirm="handleTagInputConfirm"
                @backspace="handleBackSpace"
            >
                <template slot-scope="{item}">
                    {{item.data.title}}{{item.data.operator}}{{item.data.tagValue}}
                </template>
            </am-tag-input>
        </am-button>
    </div>
</template>

<script>
    import AmTagInput from "../am-tag-input/am-tag-input";

    const OPERATORS = ['~', '!=#', '=#', '>', '>=', '<', '<=', '=']

    export default {
        name: "am-auto-table-filter",
        components: {AmTagInput},
        props: {
            searchCols: {type: Array, default: () => []},
            size: {type: String, default: 'small'},
            color: {type: String, default: 'info'},
            placeholder: {type: String, default: '搜索关键字'},
            queryFilters: {type: Array, default: () => []},
        },
        watch: {
            searchCols() {
                this.searchCol = this.searchCols.length > 0 ? this.searchCols[0] : null
            },
        },
        data() {
            return {
                searchCol: this.searchCols.length > 0 ? this.searchCols[0] : null,
                searchValue: null,
            }
        },
        methods: {
            handleSelect(cols) {
                this.searchCol = cols[0]
            },
            handleFilterConfirm() {
                this.getFilterData();
            },
            handleFilterDelete(val) {
                this.confirm()
            },
            handleBackSpace() {
                if (!this.$refs.input.label) {
                    this.queryFilters.pop()
                    this.confirm()
                }
            },
            handleTagInputConfirm(val) {

                if (!val) return
                for (let i = 0; i < OPERATORS.length; i++) {
                    const operator = OPERATORS[i];
                    const operatorIndex = val.indexOf(operator)
                    if (operatorIndex > -1) {
                        const title = val.slice(0, operatorIndex)
                        let field;
                        const cols = this.searchCols.filter(col => col.title === title)
                        if (cols.length < 1) {
                            this.$modal.show({title: '警告', message: `无法找到匹配的列！`,})
                            return
                        } else {
                            field = cols[0].field
                        }

                        const value = val.slice(operatorIndex + 1, val.length)
                        const filter = {title, value, operator, field, tagValue: value}
                        this.queryFilters.push(this.$refs.filter.formatFilter(filter))
                        this.confirm()
                        return
                    }
                }
                this.$modal.show({title: '警告', message: `筛选操作符不正确！`,})
            },
            getFilterData() {
                const filterData = this.$refs.filter.getValue()
                if (!!filterData) {
                    this.queryFilters.push(Object.assign({
                        field: this.searchCol.field,
                        operator: '=',
                        dateFormat: false,
                        title: this.searchCol.title,
                    }, filterData))
                    this.searchValue = null;
                    this.confirm()
                }
            },
            confirm() {
                this.$emit('confirm')
            }
        },
    }
</script>

<style lang="scss">
    .am-auto-table-filter {
        display: inline-block;
        vertical-align: bottom;
        .am-select, .am-icon {
            cursor: pointer;
        }
    }
</style>
