<template>
    <div class="move-example example-page">

        <div class="example-row">
            <am-button-group>
                <am-button @click="add">add</am-button>
                <am-button @click="remove">remove</am-button>
                <am-button @click="shuffle">shuffle</am-button>
            </am-button-group>
            <am-button-group>
                <am-button @click="changeDirection('left')">left</am-button>
                <am-button @click="changeDirection('right')">right</am-button>
                <am-button @click="changeDirection('top')">top</am-button>
                <am-button @click="changeDirection('bottom')">bottom</am-button>
                <am-button @click="changeDirection('left-top')">left-top</am-button>
                <am-button @click="changeDirection('right-top')">right-top</am-button>
                <am-button @click="changeDirection('left-bottom')">left-bottom</am-button>
                <am-button @click="changeDirection('right-bottom')">right-bottom</am-button>
            </am-button-group>
        </div>

        <div class="example-row">
            <am-move-container :direction="direction">
                <am-move-item v-for="(item,index) in cities" :key="item.name" class="test-item"
                              @click.native="handleClick(item,index)">
                    {{item.name}}
                </am-move-item>
            </am-move-container>
        </div>
    </div>
</template>

<script>
    import AmMoveContainer from '../../../../src/components/am-move/am-move-container';
    import AmMoveItem from '../../../../src/components/am-move/am-move-item';

    export default {
        name: 'move-example',
        components: {AmMoveItem, AmMoveContainer},
        data() {
            return {
                direction: 'bottom-right',
                cities: [
                    {name: '广州市'},
                    {name: '上海市'},
                    {name: '北京市'},
                    {name: '深圳市'},
                    {name: '长沙市'},
                    {name: '南京市'},
                ]
            };
        },
        methods: {
            randomIndex: function () {
                return Math.floor(Math.random() * this.cities.length);
            },
            handleClick(item, index) {
                this.cities.splice(index, 1);
            },
            add() {
                this.cities.splice(this.randomIndex(), 0, {name: new Date().getTime()});
            },
            remove() {
                this.cities.splice(this.randomIndex(), 1);
            },
            shuffle() {
                this.cities = _.shuffle(this.cities);
            },

            changeDirection(d) {
                this.direction = d;
            },
        }
    };
</script>
<style lang="scss">
    .test-item {
        height: 120px;
        width: 200px;
        margin-bottom: 12px;
        margin-right: 12px;
        border-radius: $shape-fillet;
        padding: 12px;
        color: white;
        background-color: $color-primary;

        display: inline-block !important;
    }
</style>
