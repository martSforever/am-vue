<template>
    <div class="am-collapse-group" :class="[`am-collapse-group-shape-${shape}`]">
        <slot></slot>
    </div>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-collapse-group',
        props: {
            limit: {type: Number},
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'none']);
                },
            },
        },
        data() {
            return {
                headItems: [],
                stack: [],
            };
        },
        methods: {
            add(collapse) {
                this.headItems.push(collapse);
                if (!!collapse.currentValue) {
                    this.stack.push(collapse);
                }
            },
            remove(collapse) {
                this.headItems.splice(this.headItems.indexOf(collapse), 1);
            },
            beforeClick(val, collapse) {
                if (!val) {
                    this.stack.push(collapse);
                    if (!!this.limit && this.limit > 0 && this.stack.length > this.limit) {
                        this.stack.shift().currentValue = false;
                    }
                } else {
                    this.stack.splice(this.stack.indexOf(collapse), 1);
                }
            },
        },
    };
</script>
