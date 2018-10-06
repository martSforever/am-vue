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
            <div>
                <div class="am-date-panel-item"
                     v-for="(date,index) in days"
                     :class="itemClass(date)"
                     @click="handleClick(date)"
                     :key="index"
                >
                    <!--{{date.month}}-{{month}}-->
                    {{date.day}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "am-date-panel",
        props: {
            year: {},
            month: {},
            date: {},
        },
        data() {
            return {
                weekday: [0, 1, 2, 3, 4, 5, 6],

                nowYear: new Date().getFullYear(),
                nowMonth: new Date().getMonth(),
                nowDate: new Date().getDate(),
            }
        },
        computed: {
            days() {
                let days = []
                let date = new Date()
                let month = this.month                                //当前显示日历版的月份
                date.setFullYear(this.year, month, 1)                 //当前日历版的年月时间

                /*---------------------------------------添加目标月上个月日期-------------------------------------------*/
                let week = date.getDay()                                  //目标月的第一天是星期几
                date.setDate(0)                                           //设置时间为目标月上个月的最后一天
                let day = date.getDate()
                while (week > 0) {                                        //添加上个月的最后几天
                    days.unshift({
                        day: day,
                        month: date.getMonth(),
                        year: date.getFullYear(),
                    })
                    day--
                    week--
                }
                /*---------------------------------------添加目标月日期-------------------------------------------*/
                date.setFullYear(this.year, month + 1, 1)             //设置日期为目标月的下一月，1号
                date.setDate(0)                                           //设置日期为目标月最后一天
                day = date.getDate()                                      //目标月最后一天
                for (let i = 1; i <= day; i++) {                          //添加目标月日期
                    days.push({
                        day: i,
                        month: date.getMonth(),
                        year: date.getFullYear(),
                    })
                }
                /*---------------------------------------添加目标月下个月日期-------------------------------------------*/
                date.setFullYear(this.year, month + 1, 1)             //设置日期为目标月的下一月，1号
                for (let i = 1; days.length < 42; i++) days.push({
                    day: i,
                    month: date.getMonth(),
                    year: date.getFullYear(),
                })
                return days
            },
        },
        methods: {
            itemClass(date) {
                return {
                    'am-date-panel-item-active': date.year === this.year && date.month === this.month && date.day === this.date,
                    'am-date-panel-item-other-month': date.month !== this.month,
                    'am-date-panel-item-now': date.year === this.nowYear && date.month === this.nowMonth && date.day === this.nowDate,
                }
            },
            handleClick(date) {
                this.$emit('click', date)
            },
        },
    }
</script>
