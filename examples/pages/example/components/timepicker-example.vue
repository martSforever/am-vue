<template>
    <div class="timepicker-example">
        <am-button @click="timepicker.updatePosition()">{{date1}}</am-button>
        <am-timepicker v-model="date1" ref="timepicker"/>
    </div>
</template>

<script>
    export default {
        name: "timepicker-example",
        data() {
            let date1 = new Date()
            date1.setHours(8)
            date1.setMinutes(8)
            date1.setSeconds(8)

            return {
                date1,
            }
        },
    }
</script>
