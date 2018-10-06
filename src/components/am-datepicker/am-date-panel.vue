<template>
    <div class="am-date-panel">
        <div class="am-date-panel-content-wrapper">
            <div>
                <div class="am-date-panel-item"
                     v-for="(item,index) in $amlocale.date.week"
                     :key="index">
                    {{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "am-date-panel",
        data() {
            return {
                weekday: [0, 1, 2, 3, 4, 5, 6],

            }
        },
    }
</script>
