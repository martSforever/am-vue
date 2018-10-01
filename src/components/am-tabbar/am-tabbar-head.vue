<template>
    <div class="am-tabbar-head">
        <div class="am-tabbar-head-content">
            <am-tabbar-head-item
                v-for="(tab,index) in tabs"
                @click.native="_handleClick(index)"
                :tab="tab"
                @close="$emit('close',index)"
                :key="tab.tabId"/>
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
            }
        },
        data() {
            return {
                items: [],
                lefts: [0],
                currentValue: null,
            };
        },
        methods: {
            addItem(item) {
                this.items.push(item);
                this.items.sort((a, b) => a.tab.order - b.tab.order);
                this.update();
                if (!this.currentValue && this.items.length - 1 === this.value) {
                    this.currentValue = this.value;
                }
            },
            _handleClick(index) {
                this.currentValue = index;
            },
            remove(index) {

                this.items.splice(index, 1);
                this.update();
            },
            update() {
                let len = this.items.length;
                this.lefts.splice(0, this.lefts.length);
                for (let i = 0; i < len; i++) {
                    const item = this.items[i];
                    let preItem;
                    if (i === 0) {
                        preItem = {width: 0, left: 0};
                    } else {
                        preItem = this.items[i - 1];
                    }
                    item.left = preItem.width + preItem.left;
                    this.lefts.push(item.left);
                }
            },
        },
        computed: {
            indicatorStyles() {
                return {
                    width: `${(this.currentValue != null && !!this.items[this.currentValue]) ? this.items[this.currentValue].width : 0}px`,
                    height: '3px',
                    backgroundColor: this.indicatorColor,
                    left: `calc(${this.currentValue + 1}em + ${this.lefts[this.currentValue]}px)`
                };
            },
        }
    };
</script>
