<template>
    <am-select :data="list"
               :value="label"
               @select="handleSelect"
               show-key="label"

               :type="type"
               :color="color"
               :size="size"
               :shape="shape"
               :height="150"
    >
        <template slot-scope="data">
            {{data.label}}
        </template>
    </am-select>
</template>

<script>

    import {getModuleStore} from "../store";
    import {oneOf} from "../../src/scripts/utils";

    const {mapGetters} = getModuleStore('lov')

    export default {
        name: "am-lov-pick",
        props: {
            lovType: {type: String, required: true},
            value: {},

            type: {
                type: String, default: 'line', validator(val) {
                    return oneOf(val, ['fill', 'line', 'none']);
                },
            },
            color: {
                type: String,
                default: 'info',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error', 'none']);
                },
            },
            size: {
                type: String,
                default: 'default',
                validator(val) {
                    return oneOf(val, ['default', 'large', 'small']);
                },
            },
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'round', 'none']);
                },
            },
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        computed: {
            ...mapGetters(['lovData']),
            list() {
                return !!this.lovData ? this.lovData.filter(item => item.type === this.lovType) : []
            },
            label() {
                const ret = !!this.lovData ? this.lovData.filter(item => item.type === this.lovType && item.code === this.currentValue) : []
                return ret.length > 0 ? ret[0].label : null
            },
        },
        methods: {
            handleSelect(val) {
                this.currentValue = val[0].code
            },
        }
    }
</script>
