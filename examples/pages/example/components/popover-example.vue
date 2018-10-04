<template>
    <div class="popover-example example-page">
        <div class="title">
            基本用法，popover在初衷在于用来封装功能比较丰富的下拉框组件，通过自定义属性可以实现各种丰富的功能，不建议直接使用于业务场景
            <br>
            popover组件必须指定父组件以及目标元素，比如当前popover的父组件是popover-example、目标组件为这个按钮ref1
        </div>
        <div class="example-row">
            <am-button ref="ref1" @click="val1 = !val1">toggle</am-button>
            <am-popover v-model="val1" parent-name="popover-example" reference-name="ref1">
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>

        <div class="title">设置方向以及对其方式</div>
        <div class="example-row" style="padding-left: 250px;">
            <am-button ref="ref2" @click="val2 = !val2">toggle</am-button>
            <am-button-group>
                <am-button dashed>direction</am-button>
                <am-button @click="direction='top'" :color="direction === 'top'?'success':'primary'">top</am-button>
                <am-button @click="direction='bottom'" :color="direction === 'bottom'?'success':'primary'">bottom
                </am-button>
                <am-button @click="direction='left'" :color="direction === 'left'?'success':'primary'">left</am-button>
                <am-button @click="direction='right'" :color="direction === 'right'?'success':'primary'">right
                </am-button>
            </am-button-group>
            <am-button-group>
                <am-button dashed>align</am-button>
                <am-button @click="align='start'" :color="align === 'start'?'success':'primary'">start</am-button>
                <am-button @click="align='center'" :color="align === 'center'?'success':'primary'">center</am-button>
                <am-button @click="align='end'" :color="align === 'end'?'success':'primary'">end</am-button>
            </am-button-group>
            <am-popover
                v-model="val2"
                parent-name="popover-example"
                reference-name="ref2"
                :direction.sync="direction"
                :align.sync="align"
            >
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>
        <div class="title">设置阴影(因为阴影包括popper的阴影以及arrow的阴影，所以这里增加了一个属性，用来设置阴影，开发者可以通过css改变阴影)</div>
        <div class="example-row">
            <am-button ref="ref3" @click="val3 = !val3">toggle</am-button>
            <am-popover v-model="val3" parent-name="popover-example" reference-name="ref3" shadow="0px 0px 20px black">
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>
        <div class="title">设置圆角</div>
        <div class="example-row">
            <am-button ref="ref4" @click="val4 = !val4">toggle</am-button>
            <am-popover v-model="val4" parent-name="popover-example" reference-name="ref4" border-radius="10px">
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>
        <div class="title">是否在点击popover外部元素的时候，关闭popover</div>

        <div class="example-row">
            <am-button ref="ref5" @click="val5 = !val5">toggle</am-button>
            <am-popover v-model="val5" parent-name="popover-example" reference-name="ref5"
                        :hide-on-click-outside="false">
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>
        <div class="title">是否令popper与reference在方向上宽度一致</div>
        <div class="example-row">
            <am-button ref="ref6" @click="val6 = !val6">vertical</am-button>
            <am-popover v-model="val6" parent-name="popover-example" reference-name="ref6" size-equal>
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>

            <am-button ref="ref7" @click="val7 = !val7">horizontal</am-button>
            <am-popover v-model="val7" parent-name="popover-example" reference-name="ref7" size-equal direction="right">
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>

        <div class="title">不要箭头</div>
        <div class="example-row">
            <am-button ref="ref8" @click="val8 = !val8">horizontal</am-button>
            <am-popover v-model="val8" parent-name="popover-example" reference-name="ref8" :show-arrow="false">
                <div class="popover-box">
                    hello wolrd
                </div>
            </am-popover>
        </div>
        <div class="title">设置背景色</div>
        <div class="example-row">
            <am-button ref="ref9" @click="val9 = !val9">toggle</am-button>
            <am-popover v-model="val9" parent-name="popover-example" reference-name="ref9" background-color="black">
                <div class="popover-box" style="color: white">
                    hello wolrd
                </div>
            </am-popover>
        </div>
        <am-button-group>
            <am-button dashed>direction</am-button>
            <am-button @click="direction='top'" :color="direction === 'top'?'success':'primary'">top</am-button>
            <am-button @click="direction='bottom'" :color="direction === 'bottom'?'success':'primary'">bottom
            </am-button>
            <am-button @click="direction='left'" :color="direction === 'left'?'success':'primary'">left</am-button>
            <am-button @click="direction='right'" :color="direction === 'right'?'success':'primary'">right
            </am-button>
        </am-button-group>
        <am-button-group>
            <am-button dashed>align</am-button>
            <am-button @click="align='start'" :color="align === 'start'?'success':'primary'">start</am-button>
            <am-button @click="align='center'" :color="align === 'center'?'success':'primary'">center</am-button>
            <am-button @click="align='end'" :color="align === 'end'?'success':'primary'">end</am-button>
        </am-button-group>
        <div class="title">
            综合测试，当页面滚动时，会自动追踪位置，当元素移动时，需要调用update方法更新位置，
            当popover所在方向位置不足时，会自动更新到另一个位置，当位置变得充足时，又会自动回到原来的位置
        </div>
        <div class="box">
            <am-scrollbar>
                <div class="inner-box">
                    <div style="width: 100px;height: 100px;background-color: #782009;color: white"
                         v-move="handleMove"
                         ref="button"
                         @click="val10 = !val10">
                        reference
                    </div>
                    <am-popover v-model="val10"
                                ref="popover"
                                :direction.sync="direction"
                                :align.sync="align"
                                parent-name="popover-example"
                                reference-name="button">
                        <div style="height: 100px;width: 100px;">
                            this is popover content
                        </div>
                    </am-popover>
                </div>
            </am-scrollbar>
        </div>
    </div>
</template>

<script>
    import move from 'amvue/directives/move'

    export default {
        name: "popover-example",
        directives: {
            move
        },
        data() {
            return {
                val1: false,
                val2: false,
                val3: false,
                val4: false,
                val5: false,
                val6: false,
                val7: false,
                val8: false,
                val9: false,
                val10: false,
                val11: false,

                direction: 'top',
                align: 'center',
            }
        },
        mounted() {
        },
        methods: {
            handleMove() {
                this.$refs.popover.update()
            },
        },
    }
</script>

<style lang="scss">
    .popover-example {
        .box {
            width: 800px;
            height: 400px;
            .inner-box {
                width: 1000px;
                height: 800px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .popover-box {
            color: black;
            height: 100px;
            width: 200px;
        }
    }
</style>
