<template>
    <div class="am-month-pannel">
        <div class="am-month-pannel-content-wrapper">
            <div class="am-month-pannel-item-wrapper"
                 v-for="(item,index) in list"
                 @click="currentValue = item"
                 :key="index">
                <div class="am-month-pannel-item"
                     :class="{'am-month-pannel-item-active':item===currentValue,'am-month-pannel-item-now':item === nowMonth}">
                    {{item+1}}月
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "am-month-pannel",
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
