<template>
    <am-radio v-model="row[field]"/>
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
    };
</script>
