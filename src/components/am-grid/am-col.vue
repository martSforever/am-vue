<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-col',
        props: {
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
        },
        data() {
            return {gutter: 0};
        },
        computed: {
            classes() {
                let classes = [
                    'am-col',
                    {
                        [`am-col-span-${this.span}`]: !!this.span,
                        [`am-col-order-${this.order}`]: !!this.order,
                        [`am-col-offset-${this.offset}`]: !!this.offset,
                        [`am-col-push-${this.push}`]: !!this.push,
                        [`am-col-pull-${this.pull}`]: !!this.pull,
                        [`${this.className}`]: !!this.className,
                    }
                ];

                ['xs', 'sm', 'md', 'lg'].forEach(size => {
                    if (typeof this[size] === 'number') {
                        classes.push(`am-col-${size}-${this[size]}`);
                    }
                    else if (typeof this[size] === 'object') {
                        let props = this[size];
                        Object.keys(props).forEach(prop => {
                            classes.push(
                                prop !== 'span'
                                    ? `am-col-${size}-${prop}-${props[prop]}`
                                    : `am-col-span-${size}-${props[prop]}`
                            );
                        });
                    }
                });

                return classes;
            },
            styles() {
                let style = {};
                if ((this.gutter - 0) !== 0) {
                    style = {
                        paddingLeft: (this.gutter - 0) / 2 + 'px',
                        paddingRight: (this.gutter - 0) / 2 + 'px'
                    };
                }
                return style;
            }
        },
        methods: {
            updateGutter() {
                const row = this.$parent;
                if (row.$options.name !== 'am-row') {
                    console.error('update gutter failed, col must be wrapped by row!');
                    return;
                }
                row.updateGutter();
            }
        },
        mounted() {
            this.updateGutter();
        },
        beforeDestroy() {
            this.updateGutter();
        }
    };
</script>
