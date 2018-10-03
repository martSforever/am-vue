<template>
    <div class="popover-example">
        <am-button>direction</am-button>
        <am-button-group>
            <am-button @click="direction='top'" :color="direction === 'top'?'success':'primary'">top</am-button>
            <am-button @click="direction='bottom'" :color="direction === 'bottom'?'success':'primary'">bottom
            </am-button>
            <am-button @click="direction='left'" :color="direction === 'left'?'success':'primary'">left</am-button>
            <am-button @click="direction='right'" :color="direction === 'right'?'success':'primary'">right
            </am-button>
        </am-button-group>
        <am-button>align</am-button>
        <am-button-group>
            <am-button @click="align='start'" :color="align === 'start'?'success':'primary'">start</am-button>
            <am-button @click="align='center'" :color="align === 'center'?'success':'primary'">center</am-button>
            <am-button @click="align='end'" :color="align === 'end'?'success':'primary'">end</am-button>
        </am-button-group>
        <am-button @click="val1 = !val1">toggle</am-button>

        <div class="box">
            <div style="width: 100px;height: 100px;background-color: #782009;color: white" ref="button"
                 @click="val1 = !val1">
                reference
            </div>
            <am-popover v-model="val1"
                        :direction.sync="direction"
                        :align.sync="align"
                        parent-name="popover-example"
                        reference-name="button">
                <div style="height: 100px;width: 100px;">
                    this is popover content
                </div>
            </am-popover>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popover-example",
        data() {
            return {
                val1: false,
                direction: 'top',
                align: 'center',
            }
        },
        mounted() {
        },
    }
</script>

<style lang="scss">
    .popover-example {
        .box {
            width: 800px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
