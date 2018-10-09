<template>
    <div class="table-example">
        <div class="title">
            最好不要出现有两列对同一个属性值做双向绑定的情况出现，会导致保存的时候数据异常
        </div>
        <am-button-group>
            <am-button @click="addRow">add row</am-button>
            <am-button @click="removeRow">remove row</am-button>
            <am-button @click="getSelectRow1">getSelectRow1</am-button>
            <am-button @click="getSelectRow2">getSelectRow2</am-button>
        </am-button-group>
        <am-number-input v-model="index1"/>
        <am-button-group>
            <am-button @click="cancelEditSpecific">cancelEditSpecific</am-button>
            <am-button @click="cancelEditAll">cancelEditAll</am-button>
            <am-button @click="saveSpecificEdit">saveSpecificEdit</am-button>
            <am-button @click="saveEdit">saveEdit</am-button>
        </am-button-group>
        <am-number-input v-model="width" :dur-num="10"></am-number-input>
        <am-number-input v-model="order"></am-number-input>
        <am-button @click="log()">headColumns</am-button>
        <div style="width: 100%;height: 400px">
            <am-table ref="table1" :list="dateList" :stripe="true">
                <am-table-column title="内部订单信息">
                    <am-table-column field="checked" width="90px" title="checked"/>
                    <am-table-column-check field="checked" ref="check1"/>
                    <am-table-column-check field="checked" :confirm="false"/>
                    <am-table-column field="checked2" width="90px" title="checked"/>
                    <am-table-column-check field="checked2" :confirm="false" ref="check2"/>

                    <am-table-column title="收货信息">
                        <!--<am-table-column title="收货地址" field="takeAddr" order="1"></am-table-column>-->
                        <am-table-column-input title="收货地址" field="takeAddr" order="1" type="fill" color="primary"/>
                        <am-table-column title="收货联系人" field="takePerson" :order="order"></am-table-column>
                        <am-table-column title="收货联系方式" field="takeContract" order="3"></am-table-column>
                    </am-table-column>
                    <am-table-column title="发货信息">
                        <am-table-column title="发货地址" field="sendAddr"></am-table-column>
                        <am-table-column title="发货联系人" field="sendPerson"></am-table-column>
                        <am-table-column title="发货联系方式" field="sendContract"></am-table-column>
                    </am-table-column>
                    <am-table-column title="发货信息">
                        <am-table-column title="发货地址" field="sendAddr"></am-table-column>
                        <am-table-column title="发货联系人" field="sendPerson"></am-table-column>
                        <am-table-column title="发货联系方式" field="sendContract"></am-table-column>
                    </am-table-column>
                </am-table-column>
                <am-table-column title="订单信息" fixed="right">
                    <am-table-column title="发货信息">
                        <am-table-column title="发货地址right" field="sendAddr"></am-table-column>
                        <am-table-column title="发货联系人right" field="sendPerson"></am-table-column>
                        <am-table-column title="发货联系方式right" field="sendContract"></am-table-column>
                    </am-table-column>
                </am-table-column>
                <am-table-column title="外部订单信息" fixed="left">
                    <am-table-column-index :order="1" :width="`${width}px`"
                                           @update:width="e=>width=removePx(e)"/>
                    <!--<am-table-column-input title="收货地址" field="takeAddr" order="1"/>-->
                    <am-table-column title="收货地址left" field="takeAddr"></am-table-column>
                    <am-table-column title="收货联系人left" field="takePerson"></am-table-column>
                    <am-table-column title="收货联系方式left" field="takeContract"></am-table-column>
                </am-table-column>


            </am-table>
        </div>
    </div>
</template>

<script>
    import {removePx} from '../../../../src/scripts/utils';
    import AmTableColumn from '../../../../src/components/am-table/am-table-column';

    export default {
        name: 'table-example',
        components: {AmTableColumn},
        props: {},
        data() {
            return {
                width: 40,
                order: 2,
                index1: null,
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
                ],

            };
        },
        methods: {
            log() {
                console.log(this.$refs.table1.headColumns);
            },
            addRow() {
                this.dateList.push({
                    takeAddr: '广州市花都区站前路1号',
                    takePerson: '刘德华-add',
                    takeContract: '18111111111',

                    sendAddr: '佛山市南海区狮山镇',
                    sendPerson: '张学友-add',
                    sendContract: '18211111111',
                });
            },
            removeRow() {
                this.dateList.pop();
            },
            removePx,
            rowStyleFunc({row, rowIndex}) {
                return {
                    backgroundColor: rowIndex % 2 === 0 ? '#333' : '#999'
                };
            },
            cellStyleFunc({row, rowIndex, col, colIndex}) {
                return {
                    backgroundColor: colIndex % 2 === 0 ? 'blue' : 'red'
                };
            },
            cancelEditSpecific() {
                if (this.index1 != null) {
                    this.$refs.table1.cancelEdit(this.index1);
                }
            },
            cancelEditAll() {
                this.$refs.table1.cancelEdit();
            },
            saveSpecificEdit() {
                if (this.index1 != null) {
                    this.$refs.table1.saveEdit(this.index1);     //保存数据
                    this.$refs.table1.cancelEdit(this.index1);   //取消编辑状态
                }
            },
            saveEdit() {
                this.$refs.table1.saveEdit();                    //保存数据
                this.cancelEditAll();                             //取消编辑状态
            },
            getSelectRow1() {
                this.$modal.show({
                    message: this.$refs.check1.getSelectRow().reduce((ret, item) => {
                        ret.push(item.takePerson);
                        return ret;
                    }, []).join(',')
                });
            },
            getSelectRow2() {
                this.$modal.show({
                    message: this.$refs.check2.getSelectRow().reduce((ret, item) => {
                        ret.push(item.takePerson);
                        return ret;
                    }, []).join(',')
                });
            }
        },
    };
</script>
