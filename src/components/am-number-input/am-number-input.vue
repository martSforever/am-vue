<template>
    <am-input
        v-model="currentValue"
        :type="type"
        :color="color"
        :size="size"
        :shape="shape"
        :dashed="dashed"
        :long="long"
        :placeholder="placeholder"
        :disabled="disabled"
        :clearable="clearable"
        prefix-icon="fas-plus"
        suffix-icon="fas-minus"
        @click-prefix-icon="currentValue=((currentValue-0)+(durNum-0)).toFixed(toFixed-0)"
        @click-suffix-icon="currentValue=((currentValue-0)-(durNum-0)).toFixed(toFixed-0)"
        :regexp="regexp"
    />
</template>

<script>

    import AmInput from '../am-input';

    export default {
        name: 'am-number-input',
        components: {AmInput},
        props: {
            value: {},
            type: {default: 'fill'},
            color: {default: 'primary'},
            size: {},
            shape: {},
            dashed: {},
            long: {},
            placeholder: {},
            disabled: {},
            clearable: {},
            durNum: {default: 1},
            toFixed: {default: 2},
            regexp: {default: () => /[^0-9.]/g}
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) {
                    this.currentValue = val;
                }
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                currentValue: this.value
            };
        },
    };
</script>
