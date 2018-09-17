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


        <!--<div class="example-row">
            <am-button-group>
                <am-button label="primary" @click="(type='primary') && (show1 = true)" color="primary"/>
                <am-button label="info" @click="(type='info') && (show1 = true)" color="info"/>
                <am-button label="success" @click="(type='success') && (show1 = true)" color="success"/>
                <am-button label="warn" @click="(type='warn') && (show1 = true)" color="warn"/>
                <am-button label="error" @click="(type='error') && (show1 = true)" color="error"/>
            </am-button-group>
        </div>
        <am-modal v-model="show1"
                  :shadow="true"
                  :type="type"
                  title="操作提示"
                  message="通知内容"
                  confirm-button
                  cancel-button
                  :close-icon="true"
                  vertical="start"
                  horizontal="center"
                  :full="false"
                  top="10vh"
        >

        </am-modal>-->
    </div>
</template>

<script>
    import AmButtonGroup from '../../../../src/components/am-button/am-button-group';
    import AmModal from '../../../../src/components/am-modal/am-modal';

    export default {
        name: 'modal-example',
        components: {AmModal, AmButtonGroup},
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


                type: 'primary',
                shape: 'fillet',
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
