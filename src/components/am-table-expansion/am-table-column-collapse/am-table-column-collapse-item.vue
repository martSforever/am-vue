<template>
    <am-radio
        v-model="currentValue"
        :active-icon="activeIcon"
        :inactive-icon="inactiveIcon"
    />
</template>

<script>
    import AmRadio from '../../am-radio/am-radio';
    import tableEditItemMixin from '../table-edit-item-mixin';

    export default {
        name: 'am-table-column-collapse-item',
        components: {AmRadio},
        mixins: [
            tableEditItemMixin
        ],
        props: {
            activeIcon: {},
            inactiveIcon: {},

        },
        watch: {
            currentValue(val) {
                this.save();
                this[!!val ? 'open' : 'close']();
            },
        },
        methods: {
            open() {
                console.log('open');
            },
            close() {
                console.log('close');
            }
        },
    };
</script>
