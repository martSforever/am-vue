<template>
    <div class="modal-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-button @click="show1 = !show1">normal</am-button>
            <am-modal v-model="show1" title="基本用法" message="快捷消息内容"/>
        </div>
        <div class="title">无遮罩</div>
        <div class="example-row">
            <am-button @click="show2 = !show2">shadow="false"</am-button>
            <am-modal v-model="show2" title="无遮罩" message="快捷消息内容" :shadow="false"/>
        </div>
        <div class="title">遮罩颜色</div>
        <div class="example-row">
            <am-button @click="show3 = !show3">shadow-color="black"</am-button>
            <am-modal v-model="show3" title="遮罩颜色" message="快捷消息内容" shadow-color="black"/>
        </div>

        <div class="title">对话框形状</div>
        <div class="example-row">
            <am-button @click="(shape = 'fillet') && (show4 = !show4)">shape="fillet"</am-button>
            <am-button @click="(shape = 'none') && (show4 = !show4)">shape="none"</am-button>
            <am-modal v-model="show4" title="对话框形状" message="快捷消息内容" :shape="shape"/>
        </div>

        <div class="title">自定义对话框展示动画transition-name</div>
        <div class="example-row">
            <am-button @click="show5 = !show5">transition-name</am-button>
            <am-modal v-model="show5" title="transition-name" message="快捷消息内容" transition-name="cst-scale"/>
        </div>

        <div class="title">自定义宽度以及高度</div>
        <div class="example-row">
            <am-button @click="show6 = !show6">width/height</am-button>
            <am-modal v-model="show6" title="width/height" message="快捷消息内容" width="600px" height="600px"/>
        </div>
        <div class="title">全屏大小</div>
        <div class="example-row">
            <am-button @click="show7 = !show7">full</am-button>
            <am-modal v-model="show7" title="full" message="快捷消息内容" full/>
        </div>
        <div class="title">显示消息级别</div>
        <div class="example-row">
            <am-button-group>
                <am-button @click="(type = 'primary') && (show8 = !show8)" color="primary">type="primary"</am-button>
                <am-button @click="(type = 'info') && (show8 = !show8)" color="info">type="info"</am-button>
                <am-button @click="(type = 'success') && (show8 = !show8)" color="success">type="success"</am-button>
                <am-button @click="(type = 'warn') && (show8 = !show8)" color="warn">type="warn"</am-button>
                <am-button @click="(type = 'error') && (show8 = !show8)" color="error">type="error"</am-button>
            </am-button-group>

            <am-modal v-model="show8" title="type" message="快捷消息内容" :type="type"/>
        </div>

        <div class="title">确认按钮以及取消按钮</div>
        <div class="example-row">
            <am-button @click="show9 = !show9">foot button</am-button>
            <am-modal v-model="show9" title="确认按钮以及取消按钮" message="快捷消息内容" confirm-button cancel-button
                      @on-confirm="e=>log('confirm')" @on-cancel="e=>log('cancel')"/>
        </div>

        <div class="title">对话框位置</div>
        <div class="example-row">
            <am-radio-group v-model="vertical">
                <am-button>vertical:{{vertical}}</am-button>
                <am-radio radio-key="start" label="start"/>
                <am-radio radio-key="center" label="center"/>
                <am-radio radio-key="end" label="end"/>
            </am-radio-group>
            <am-radio-group v-model="horizontal">
                <am-button>horizontal:{{horizontal}}</am-button>
                <am-radio radio-key="start" label="start"/>
                <am-radio radio-key="center" label="center"/>
                <am-radio radio-key="end" label="end"/>
            </am-radio-group>
        </div>
        <div class="example-row">
            <am-button @click="show10 = !show10">toggle</am-button>
            <am-modal v-model="show10" title="vertical/horizontal" message="快捷消息内容" :vertical="vertical"
                      :horizontal="horizontal"/>
        </div>

        <div class="title">通过left/right/top/bottom调整对话框位置</div>
        <div class="example-row">
            <am-button>left:</am-button>
            <am-number-input v-model="left"/>
            <am-button>right:</am-button>
            <am-number-input v-model="right"/>
            <am-button>top:</am-button>
            <am-number-input v-model="top"/>
            <am-button>bottom:</am-button>
            <am-number-input v-model="bottom"/>
        </div>
        <div class="example-row">
            <am-button @click="show11 = !show11">toggle</am-button>
            <am-modal v-model="show11" title="position" message="快捷消息内容"
                      :left="left+'vw'"
                      :right="right+'vw'"
                      :top="top+'vh'"
                      :bottom="bottom+'vh'"/>
        </div>

        <div class="title">自定义内容插槽，标题栏插槽以及底部栏插槽</div>
        <div class="example-row">
            <am-button @click="show12 = !show12">toggle</am-button>
            <am-modal v-model="show12" shape="none">
                <div>
                    自定义内容
                </div>
                <div slot="head">自定义顶部栏</div>
                <div slot="foot">自定义底部栏</div>
            </am-modal>
        </div>
        <div class="title">最大化按钮</div>
        <div class="example-row">
            <am-button @click="show13 = !show13">maxable</am-button>
            <am-modal v-model="show13" title="maxable" message="快捷消息内容" maxable confirm-button cancel-button/>
        </div>
    </div>
</template>

<script>
    import AmButtonGroup from '../../../../src/components/am-button/am-button-group';
    import AmModal from '../../../../src/components/am-modal/am-modal';
    import AmRadioGroup from '../../../../src/components/am-radio-group/am-radio-group';
    import AmNumberInput from '../../../../src/components/am-number-input/am-number-input';

    export default {
        name: 'modal-example',
        components: {AmNumberInput, AmRadioGroup, AmModal, AmButtonGroup},
        data() {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                show6: false,
                show7: false,
                show8: false,
                show9: false,
                show10: false,
                show11: false,
                show12: false,
                show13: false,


                type: 'primary',
                shape: 'fillet',
                vertical: 'start',
                horizontal: 'center',

                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
        },
        methods: {
            log(msg) {
                alert(msg);
            },
        },
    };
</script>

<style lang="scss">
    .modal-example {

    }

    .cst-scale-enter-active, .cst-scale-leave-active {
        transform-origin: left;
        @include transition-all;
    }

    .cst-scale-enter, .cst-scale-leave-to {
        transform: scale(1.2);
    }
</style>
