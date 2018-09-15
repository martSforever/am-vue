<template>
    <div class="am-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    import {deepCopy, oneOf, removeFromArray, typeOf} from '../../scripts/utils';

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
                multipleValue: deepCopy(this.value) || [],
                radios: [],
            };
        },
        watch: {
            value(val) {
                if (!!this.multiple) {
                    if (this.multipleValue !== val) this.multipleValue = deepCopy(val);
                } else {
                    if (this.singleValue !== val) this.singleValue = val;
                }
                this.updateRadios();
            },
            multipleValue(val) {
                if (JSON.stringify(val) !== JSON.stringify(this.value))
                    this.$emit('input', val);
            },
            singleValue(val) {
                this.$emit('input', val);
            },
        },
        methods: {
            addRadio(radio) {
                this.radios.push(radio);
            },
            removeRadio(radio) {
                removeFromArray(this.radios, radio);
            },

            updateRadios() {
                this.radios.forEach(radio => {
                    if (!!this.multiple) {
                        radio.currentValue = oneOf(radio.radioKey, this.multipleValue);
                    } else {
                        radio.currentValue = (radio.radioKey === this.singleValue);
                    }
                });
            },
        },
        computed: {},
        mounted() {
            if (!!this.multiple && !!this.value && typeOf(this.value) !== 'array') {
                console.error('[radio-group]value must be instance of array when multiple is true!');
                return;
            }
        },
    };
</script>
