<template>
    <am-radio v-model="currentValue"
              @change="emitChange"
              :color="color"
    />
</template>

<script>
    import tableEditItemMixin from '../table-edit-item-mixin';
    import AmRadio from '../../am-radio/am-radio';
    import {findComponentUpward} from '../../../scripts/dom';

    export default {
        name: 'am-table-column-check-item',
        components: {AmRadio},
        mixins: [
            tableEditItemMixin
        ],
        props: {
            color: {},

            toggleOnClickRow: {type: Boolean, default: false},
        },
        watch: {
            currentValue(val) {
                this.save();
            },
        },
        data() {
            return {
                tableRow: null,
            };
        },
        mounted() {
            if (!!this.toggleOnClickRow) {
                this.tableRow = findComponentUpward(this, 'am-table-row');
                !!this.tableRow && this.tableRow.$on('click', () => {
                    this.currentValue = !this.currentValue
                    this.emitChange(this.currentValue)
                });
            }
        },
        methods: {
            emitChange(val) {
                this.$emit('change', val, this.row, this.rowIndex)
            },
        },
    };
</script>
