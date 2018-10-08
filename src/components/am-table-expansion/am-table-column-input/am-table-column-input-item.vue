<template>
    <keep-alive>
        <am-input v-model="currentValue" v-if="!!editable && !!currentEditable"/>
        <span v-else>{{row[field]}}</span>
    </keep-alive>
</template>

<script>
    import tableEditItemMixin from "../table-edit-item-mixin";
    import AmInput from "../../am-input/am-input";

    export default {
        name: "am-table-column-input-item",
        components: {AmInput},
        mixins: [
            tableEditItemMixin
        ]
    }
</script>
