<template>
    <keep-alive>
        <am-lov-pick
            v-model="currentValue"
            v-if="!!editable && !!currentEditable"

            :lov-type="lovType"

            size="small"
            type="fill"
            color="primary"
            shape="none"
        />
        <span v-else><am-lov :type="lovType" :code="currentValue"/></span>
    </keep-alive>
</template>

<script>
    import AmLovPick from "./am-lov-pick";
    import AmLov from "./am-lov";
    import tableEditItemMixin from "../../src/components/am-table-expansion/table-edit-item-mixin";

    export default {
        name: "am-table-column-lov-pick-item",
        components: {AmLov, AmLovPick},
        mixins: [tableEditItemMixin],
        props: {
            lovType: {},
        }
    }
</script>

<style lang="scss">

</style>
