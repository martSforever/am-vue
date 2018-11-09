<template>
    <keep-alive>
        <am-object-pick-input
            v-if="!!editable && !!currentEditable"

            :render-func="renderFunc"
            :option="option"
            :show-key="showKey"
            :map="map"
            :single-select="true"
            :row="tempRow"

            size="small"
            type="fill"
            color="primary"
            shape="none"
        />
        <span v-else>{{row[field]}}</span>
    </keep-alive>
</template>

<script>
    import tableEditItemMixin from "../../src/components/am-table-expansion/table-edit-item-mixin";
    import {deepCopy} from "../../src/scripts/utils";

    export default {
        name: "am-table-column-object-pick-item",
        mixins: [tableEditItemMixin],
        props: {
            renderFunc: {},
            option: {},
            showKey: {},
            map: {},
        },
        data() {
            return {
                tempRow: deepCopy(this.row)
            }
        },
        methods: {
            save() {
                Object.assign(this.row, this.tempRow);
                this.tempRow = {}
            },
            disableEdit() {
                this.currentEditable = false;
                this.tempRow = {}
            },
        }
    }
</script>
