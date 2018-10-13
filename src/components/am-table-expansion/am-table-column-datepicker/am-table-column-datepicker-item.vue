<template>
    <keep-alive>
        <am-datepicker
            v-model="currentValue"
            v-if="!!editable && !!currentEditable"

            size="small"
            type="fill"
            color="primary"
            shape="none"
        />
        <span v-else>{{row[field]}}</span>
    </keep-alive>
</template>

<script>
    import tableEditItemMixin from "../table-edit-item-mixin";
    import AmDatepicker from "../../am-datepicker/am-datepicker";

    export default {
        name: "am-table-column-datepicker-item",
        components: {AmDatepicker},
        mixins: [tableEditItemMixin],
    }
</script>
