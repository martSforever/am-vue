<template>
    <div class="am-button-group" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-button-group',
        props: {
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'round', 'none']);
                },
            },
            size: {
                type: String,
                default: 'default',
                validator(val) {
                    return oneOf(val, ['large', 'default', 'small']);
                },
            },
            vertical: {
                type: Boolean
            },
        },
        computed: {
            classes() {
                return [
                    `am-button-group-shape-${this.shape}`,
                    `am-button-group-size-${this.size}`,
                    `am-button-group-${!!this.vertical ? 'vertical' : 'horizontal'}`,
                    {
                        [`am-button-group-vertical`]: !!this.vertical
                    }
                ];
            },
        },
    };
</script>
