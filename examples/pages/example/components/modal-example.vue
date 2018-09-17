<template>
    <div class="modal-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-button @click="show1 = !show1">normal</am-button>
            <am-modal v-model="show1" title="通知标题" message="通知内容"/>
        </div>
        <div class="title">无遮罩</div>
        <div class="example-row">
            <am-button @click="show2 = !show2">toggle[{{show2}}]</am-button>
            <am-modal v-model="show2" title="通知标题" message="通知内容" :shadow="false"/>
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


                type: 'info'
            };
        },
    };
</script>

<style lang="scss">
    .modal-example {

    }
</style>
