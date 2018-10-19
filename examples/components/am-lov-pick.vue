<template>
    <am-select :data="list"
               :value="label"
               @select="handleSelect"
               show-key="label">
        <template slot-scope="data">
            {{data.label}}
        </template>
    </am-select>
</template>

<script>

    import {getModuleStore} from "../store";

    const {mapGetters} = getModuleStore('lov')

    export default {
        name: "am-lov-pick",
        props: {
            lovType: {type: String, required: true},
            value: {},
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
                console.log(this.lovData, this.lovType)
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
