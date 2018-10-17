<template>
    <div class="am-pagination" :class="classes">
        <am-select :data="sizeOption"
                   :size="size"
                   suffix-icon="fas-angle-down"
                   :width="width"
                   v-model="currentPageSize"
                   shape="none"
                   type="none"
                   :size-equal="true"
                   dropdown-width="100%"
                   class="am-pagination-select">
            <span slot="prepend">页大小:</span>
            <template slot-scope="item">
                {{item}}
            </template>
        </am-select>
        <div class="am-pagination-operate-wrapper">
            <am-icon icon="fas-angle-double-left" @click="handleClickFirstNum"/>
            <am-icon icon="fas-angle-left" @click="handleClickPrevNumIcon"/>
            <div v-for="(item,index) in nums"
                 :key="index"
                 class="am-pagination-operate-num"
                 :class="{'am-pagination-operate-num-active':item === currentPage}"
                 @click="handleClickNum(item)">
                {{item}}
            </div>
            <am-icon icon="fas-angle-right" @click="handleClickNextNumIcon"/>
            <am-icon icon="fas-angle-double-right" @click="handleClickLastNum"/>
            <am-icon icon="fas-sync-alt" @click="handleClickRefresh"/>
        </div>
    </div>
</template>

<script>
    import AmSelect from '../am-select/am-select';
    import AmIcon from '../am-icon/am-icon';

    export default {
        name: 'am-pagination',
        components: {AmIcon, AmSelect},
        props: {
            width: {type: Number, default: 40},
            size: {type: String, default: 'small'},

            page: {type: Number, default: 1},
            pageSize: {type: Number | String, default: '10'},
            totalSize: {type: Number,},
            sizeOption: {type: Array, default: () => [10, 15, 20, 50]},
        },
        watch: {
            page(val) {
                if (this.page !== val) this.page = val;
            },
            currentPage(val) {
                // console.log('currentPage', val)
                this.$emit('update:page', val);
            },
            pageSize(val) {
                if (this.pageSize !== val) this.pageSize = val;
            },
            currentPageSize(val) {
                this.$emit('size-change', val);
                this.$emit('update:pageSize', val);
                this.$emit('load');
            },
        },
        data() {
            return {
                currentPage: this.page,
                currentPageSize: this.pageSize,
            };
        },
        computed: {
            classes() {
                return [
                    `am-pagination-${this.size}`,
                ];
            },
            nums() {
                if (!this.totalSize) return [0];
                const ret = [];
                const length = Math.ceil(this.totalSize / this.pageSize);
                let i = 1;
                while (i <= length) {
                    ret.push(i);
                    i++;
                }
                return ret;
            },
        },
        methods: {
            handleClickNum(item) {
                this.currentPage = item;
                this.$nextTick(() => this.$emit('load'));
            },
            handleClickPrevNumIcon() {
                if (this.currentPage - 1 < 1) return;
                this.currentPage--;
                this.$nextTick(() => this.$emit('load'));
            },
            handleClickNextNumIcon() {
                if (this.currentPage + 1 > this.nums.length) return;
                else this.currentPage++;
                this.$nextTick(() => this.$emit('load'));
            },
            handleClickFirstNum() {
                this.currentPage = 1;
                this.$nextTick(() => this.$emit('load'));
            },
            handleClickLastNum() {
                this.currentPage = this.nums.length;
                this.$nextTick(() => this.$emit('load'));
            },
            handleClickRefresh() {
                this.$emit('refresh');
            },
        },
    };
</script>
