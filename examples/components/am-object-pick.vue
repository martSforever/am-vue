<template>
    <am-modal v-model="currentValue"
              width="800px"
              height="572px"
              :confirm-button="true"
              :cancel-button="true"
              title="请选择..."
    >
        <am-auto-table :option="option"
                       :setting-config="false"
                       :exportable="false"
                       :importable="false"
                       :insertable="false"
                       :updateable="false"
                       :deleteable="false"
        >
            <am-table-column-check :toggle-on-click-row="true"/>
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
    };
</script>

<style lang="scss">

</style>
