<template>
    <keep-alive>
        <am-datepicker
            v-model="currentValue"
            v-if="!!editable && !!currentEditable"

            size="small"
            type="fill"
            color="primary"
            shape="none"
            :format="format"
        />
        <span v-else>{{showValue}}</span>
    </keep-alive>
</template>

<script>
    import tableEditItemMixin from '../table-edit-item-mixin';
    import AmDatepicker from '../../am-datepicker/am-datepicker';
    import {dateFormat} from '../../../scripts/utils';

    export default {
        name: 'am-table-column-datepicker-item',
        components: {AmDatepicker},
        mixins: [tableEditItemMixin],
        props: {
            format: {type: String},
        },
        computed: {
            showValue() {
                if (!this.currentValue) return null;
                const date = new Date(this.currentValue.replace(/-/g, '/'));
                return dateFormat(date, this.format);
            },
        }
    };
</script>
