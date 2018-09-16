<template>
    <div class="modal-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-button @click="show1 = !show1">toggle[{{show1}}]</am-button>
        </div>
        <div class="example-row">
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
                  vertical="center"
                  horizontal="center"
                  full
        >

        </am-modal>
    </div>
</template>

<script>
    import AmButtonGroup from "../../../../src/components/am-button/am-button-group";

    export default {
        name: 'modal-example',
        components: {AmButtonGroup},
        data() {
            return {
                show1: false,
                type: 'info'
            };
        },
    };
</script>

<style lang="scss">
    .modal-example {

    }
</style>
