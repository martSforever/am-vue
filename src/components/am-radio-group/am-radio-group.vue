<template>
    <div class="am-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    import {deepCopy, oneOf, typeOf} from '../../scripts/utils';

    export default {
        name: 'am-radio-group',
        props: {
            value: {},

            size: {},
            color: {},
            activeIcon: {},
            inactiveIcon: {},
            activeColor: {},
            inactiveColor: {},

            multiple: {type: Boolean},
        },
        data() {
            return {
                singleValue: this.value,
                multipleValue: deepCopy(this.value),
            };
        },
        methods: {},
        computed: {},
        mounted() {
            if (!!this.multiple && typeOf(this.value) !== 'array') {
                console.error('[radio-group]value must be instance of array when multiple is true!');
                return;
            }
        },
    };
</script>
