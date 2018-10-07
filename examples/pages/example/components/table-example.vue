<template>
    <div class="table-example">
        <am-button-group>
            <am-button @click="addRow">add row</am-button>
            <am-button @click="removeRow">remove row</am-button>
        </am-button-group>
        <am-button @click="log()">headColumns</am-button>
        <div style="width: 100%;height: 400px">
            <am-table ref="table1" :list="dateList">
                <am-table-column title="内部订单信息">
                    <am-table-column title="收货信息">
                        <am-table-column title="收货地址" field="takeAddr"></am-table-column>
                        <am-table-column title="收货联系人" field="takePerson" width="200px">
                            <template slot-scope="{row,col}">
                                <am-input size="small" long v-model="row.takePerson"></am-input>
                            </template>
                        </am-table-column>
                        <am-table-column title="收货联系方式" field="takeContract"></am-table-column>
                    </am-table-column>
                    <am-table-column title="发货信息">
                        <am-table-column title="发货地址" field="sendAddr"></am-table-column>
                        <am-table-column title="发货联系人" field="sendPerson"></am-table-column>
                        <am-table-column title="发货联系方式" field="sendContract"></am-table-column>
                    </am-table-column>
                </am-table-column>
                <am-table-column title="外部订单信息" fixed="left">
                    <am-table-column title="收货地址" field="takeAddr"></am-table-column>
                    <am-table-column title="收货联系人" field="takePerson"></am-table-column>
                    <am-table-column title="收货联系方式" field="takeContract"></am-table-column>
                </am-table-column>
                <am-table-column title="订单信息">
                    <am-table-column title="收货信息">
                        <am-table-column title="收货地址" field="takeAddr"></am-table-column>
                        <am-table-column title="收货联系人" field="takePerson"></am-table-column>
                        <am-table-column title="收货联系方式" field="takeContract"></am-table-column>
                    </am-table-column>
                    <am-table-column title="发货信息">
                        <am-table-column title="发货地址" field="sendAddr"></am-table-column>
                        <am-table-column title="发货联系人" field="sendPerson"></am-table-column>
                        <am-table-column title="发货联系方式" field="sendContract"></am-table-column>
                    </am-table-column>
                </am-table-column>

            </am-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table-example",
        props: {},
        data() {
            return {
                dateList: [
                    {
                        takeAddr: '广州市花都区机场大道东888号',
                        takePerson: '刘德华1',
                        takeContract: '18111111111',

                        sendAddr: '广州市白云区兴太三路638号',
                        sendPerson: '张学友1',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区站前路1号',
                        takePerson: '刘德华2',
                        takeContract: '18111111111',

                        sendAddr: '佛山市南海区狮山镇',
                        sendPerson: '张学友3',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区机场大道东888号',
                        takePerson: '刘德华4',
                        takeContract: '18111111111',

                        sendAddr: '广州市白云区兴太三路638号',
                        sendPerson: '张学友4',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区站前路1号',
                        takePerson: '刘德华',
                        takeContract: '18111111111',

                        sendAddr: '佛山市南海区狮山镇',
                        sendPerson: '张学友',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区机场大道东888号',
                        takePerson: '刘德华',
                        takeContract: '18111111111',

                        sendAddr: '广州市白云区兴太三路638号',
                        sendPerson: '张学友',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区站前路1号',
                        takePerson: '刘德华',
                        takeContract: '18111111111',

                        sendAddr: '佛山市南海区狮山镇',
                        sendPerson: '张学友',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区机场大道东888号',
                        takePerson: '刘德华',
                        takeContract: '18111111111',

                        sendAddr: '广州市白云区兴太三路638号',
                        sendPerson: '张学友',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区站前路1号',
                        takePerson: '刘德华',
                        takeContract: '18111111111',

                        sendAddr: '佛山市南海区狮山镇',
                        sendPerson: '张学友',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区机场大道东888号',
                        takePerson: '刘德华',
                        takeContract: '18111111111',

                        sendAddr: '广州市白云区兴太三路638号',
                        sendPerson: '张学友',
                        sendContract: '18211111111',
                    },
                    {
                        takeAddr: '广州市花都区站前路1号',
                        takePerson: '刘德华-end',
                        takeContract: '18111111111',

                        sendAddr: '佛山市南海区狮山镇',
                        sendPerson: '张学友-end',
                        sendContract: '18211111111',
                    },
                ]
            }
        },
        methods: {
            log() {
                console.log(this.$refs.table1.headColumns)
            },
            addRow() {
                this.dateList.push({
                    takeAddr: '广州市花都区站前路1号',
                    takePerson: '刘德华-add',
                    takeContract: '18111111111',

                    sendAddr: '佛山市南海区狮山镇',
                    sendPerson: '张学友-add',
                    sendContract: '18211111111',
                })
            },
            removeRow() {
                this.dateList.pop()
            },
        },
    }
</script>
