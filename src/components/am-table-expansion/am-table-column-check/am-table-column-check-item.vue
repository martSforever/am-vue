<template>
    <am-radio v-model="currentValue"
              @change="val=>$emit('change',val,row,rowIndex)"
              :color="color"
    />
</template>

<script>
    import tableEditItemMixin from '../table-edit-item-mixin';
    import AmRadio from '../../am-radio/am-radio';

    export default {
        name: 'am-table-column-check-item',
        components: {AmRadio},
        mixins: [
            tableEditItemMixin
        ],
        props: {
            color: {},
        },
        watch: {
            currentValue(val) {
                this.save();
            },
        },
    };
</script>
