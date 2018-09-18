<template>
    <div class="notice-example example-page">
        <div class="title">
            基本用法
        </div>
        <div class="example-row">
            <am-button label="$notice.show" @click="$notice.show({message:'message'})"/>
        </div>

        <div class="title">
            颜色级别
        </div>
        <div class="example-row">
            <am-button-group>
                <am-button label="primary" @click="$notice.show({message:'message',type:'primary'})" color="primary"/>
                <am-button label="info" @click="$notice.show({message:'message',type:'info'})" color="info"/>
                <am-button label="success" @click="$notice.show({message:'message',type:'success'})" color="success"/>
                <am-button label="warn" @click="$notice.show({message:'message',type:'warn'})" color="warn"/>
                <am-button label="error" @click="$notice.show({message:'message',type:'error'})" color="error"/>
            </am-button-group>
        </div>

        <div class="title">
            显示位置
        </div>
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
            <am-button label="show"
                       @click="$notice.show({message:'message',type:'primary',horizontal:horizontal,vertical:vertical})"
                       color="primary"/>
        </div>

        <div class="title">
            形状
        </div>
        <div class="example-row">
            <am-radio-group v-model="shape">
                <am-button>fillet:{{shape}}</am-button>
                <am-radio radio-key="none" label="none"/>
                <am-radio radio-key="fillet" label="fillet"/>
            </am-radio-group>

            <am-button label="show"
                       @click="$notice.show({message:'message',type:'primary',shape:shape})"
                       color="primary"/>
        </div>

        <div class="title">
            自定义消失时长,如果要取消自动消失，设置autoClose为true
        </div>
        <div class="example-row">
            <am-button label="show"
                       @click="$notice.show({duration:5000})"/>
        </div>

        <div class="title">
            无关闭按钮
        </div>
        <div class="example-row">
            <am-button label="show"
                       @click="$notice.show({closable:false})"/>
        </div>

        <div class="title">
            自定义渲染内容
        </div>
        <div class="example-row">
            <am-button label="show"
                       @click="$notice.show({closable:false,renderFunc:contentRender})"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'notice-example',
        data() {
            return {
                horizontal: 'end',
                vertical: 'end',

                shape: 'fillet',
            };
        },
        methods: {
            contentRender(h) {
                return (
                    <div>{this.horizontal}--{this.vertical}</div>
                );
            },
        },
    };
</script>
