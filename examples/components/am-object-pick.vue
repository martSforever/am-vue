<template>
    <am-modal v-model="currentValue"
              width="800px"
              height="572px"
              :confirm-button="true"
              :cancel-button="true"
              title="请选择..."
              modal-class="am-object-pick-modal"
              @on-confirm="handleConfirm"
              @on-cancel="handleCancel"
              :hide-on-click-confirm-or-cancel="false"
    >
        <am-auto-table
            ref="table"
            :option="option"
            :setting-config="false"
            :exportable="false"
            :importable="false"
            :insertable="false"
            :updateable="false"
            :deleteable="false"
        >
            <am-table-column-check :toggle-on-click-row="true" :single-select="singleSelect" ref="checkColumn"/>
            <slot></slot>
        </am-auto-table>
    </am-modal>
</template>

<script>
    export default {
        name: 'am-object-pick',
        props: {
            value: {},
            option: {},
            singleSelect: {type: Boolean, default: false},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                currentValue: this.value,
            };
        },
        methods: {
            refreshRender() {
                this.$refs.table.refreshRender();
            },
            handleConfirm() {
                const rows = this.$refs.checkColumn.getSelectRow()
                this.currentValue = false
                this.$emit('confirm', rows)
            },
            handleCancel() {
                this.currentValue = false
                this.$emit('cancel')
            },
        },
    };
</script>
