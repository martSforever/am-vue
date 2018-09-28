<template>
    <div class="am-tabbar-head">
        <div class="am-tabbar-head-content">
            <am-tabbar-head-item
                v-for="(tab,index) in tabs"
                ref="items"
                @click.native="_handleClick(index)"
                :key="index">
                {{tab.title}}
            </am-tabbar-head-item>
            <div class="am-tabbar-head-indicator" :style="indicatorStyles"></div>
        </div>
    </div>
</template>

<script>
    import AmTabbarHeadItem from './am-tabbar-head-item';

    export default {
        name: 'am-tabbar-head',
        components: {AmTabbarHeadItem},
        props: {
            tabs: {},
            value: {},
            indicatorColor: {type: String, default: '#2D8DF0'},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
                this.indicatorWidth = this.widths[val];
            }
        },
        data() {
            return {
                widths: [],
                lefts: [0],
                currentValue: null,
                indicatorWidth: null,
            };
        },
        methods: {
            addItem(item) {
                this.widths.push(item.width);
                this.lefts.push(item.width + this.lefts[this.lefts.length - 1]);
                if (!this.currentValue && this.widths.length - 1 === this.value) {
                    this.currentValue = this.value;
                }
            },
            _handleClick(index) {
                this.currentValue = index;
            },
        },
        computed: {
            indicatorStyles() {
                return {
                    width: `${this.currentValue != null ? this.widths[this.currentValue] : 0}px`,
                    height: '3px',
                    backgroundColor: this.indicatorColor,
                    transform: `translateX(calc(${this.currentValue + 1}em + ${this.lefts[this.currentValue]}px))`
                };
            },
        }
    };
</script>
