<template>
    <div class="timepicker-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-timepicker/>
        </div>
        <div class="title">使用v-model进行双向绑定，注意的是，这里绑定的是日期对象，如果需要绑定的是字符串，需要开发者自行封装</div>
        <div class="example-row">
            <am-timepicker/>
        </div>
        <div class="title">设置input样式，timepicker组件复用了input组件，可以设置input中所有属性</div>
        <div class="example-row">
            <am-timepicker
                type="fill"
                color="primary"
            />
        </div>

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
