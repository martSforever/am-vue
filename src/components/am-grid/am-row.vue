<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-row',
        props: {
            flex: {
                type: Boolean
            },
            align: {
                type: String,
                default: 'middle',
                validator(val) {
                    return oneOf(val, ['top', 'middle', 'bottom']);
                },
            },
            justify: {
                type: String,
                default: 'start',
                validator(val) {
                    return oneOf(val, ['start', 'end', 'center', 'space-around', 'space-between']);
                },
            },
            gutter: {
                type: [Number, String],
                default: 0,
            },
            className: {
                type: String
            },
        },
        computed: {
            classes() {
                return [
                    'am-row',
                    {
                        'am-row-flex': !!this.flex,
                        [`am-row-flex-${this.align}`]: !!this.align,
                        [`am-row-flex-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className,
                    }
                ];
            },
            styles() {
                let style = {};
                if ((this.gutter - 0) !== 0) {
                    style = {
                        marginLeft: (this.gutter - 0) / -2 + 'px',
                        marginRight: (this.gutter - 0) / -2 + 'px'
                    };
                }
                return style;
            },
        },
        watch: {
            gutter(val) {
                this.updateGutter();
            },
        },
        methods: {
            updateGutter() {
                const cols = this.$children.reduce((ret, item) => {
                    if (item.$options.name === 'am-col') ret.push(item);
                    return ret;
                }, []);
                (!!cols.length && (this.gutter - 0) !== 0) &&
                cols.forEach((child) => child.gutter = (this.gutter - 0));
            },
        },
    };
</script>
