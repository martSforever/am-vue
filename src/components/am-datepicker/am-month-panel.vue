<template>
    <div class="am-month-panel">
        <div class="am-month-panel-content-wrapper">
            <div class="am-month-panel-item-wrapper"
                 v-for="(item,index) in list"
                 @click="currentValue = item"
                 :key="index">
                <div class="am-month-panel-item"
                     :class="{'am-month-panel-item-active':item===currentValue,'am-month-panel-item-now':item === nowMonth}">
                    {{$amlocale.date.month[item]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "am-month-panel",
        props: {
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
                list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                currentValue: this.value,
                nowMonth: new Date().getMonth()
            }
        },
    }
</script>
