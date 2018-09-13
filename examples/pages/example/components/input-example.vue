<template>
    <div class="input-example example-page">

        <div class="title">基础用法</div>
        <div class="example-row">
            <am-input/>
        </div>
        <div class="title">颜色</div>
        <div class="example-row">
            <am-input color="info"/>
            <am-input color="primary"/>
            <am-input color="success"/>
            <am-input color="warn"/>
            <am-input color="error"/>
            <am-button type="line">这是个按钮</am-button>
        </div>

        <div class="title">样式</div>
        <div class="example-row">
            <am-input color="info"/>
            <am-input color="primary"/>
            <am-input color="success"/>
            <am-input color="warn"/>
            <am-input color="error"/>
            <am-button type="line">这是个按钮</am-button>
        </div>
        <div class="example-row">
            <am-input color="info" type="fill"/>
            <am-input color="primary" type="fill"/>
            <am-input color="success" type="fill"/>
            <am-input color="warn" type="fill"/>
            <am-input color="error" type="fill"/>
            <am-button>这是个按钮</am-button>
        </div>
        <div class="example-row">
            <am-input color="info" type="none"/>
            <am-input color="primary" type="none"/>
            <am-input color="success" type="none"/>
            <am-input color="warn" type="none"/>
            <am-input color="error" type="none"/>
            <am-button type="none">这是个按钮</am-button>
        </div>


        <div class="example-row">
            <am-input prefix-icon="fas-plus" suffix-icon="fas-times"/>
            <am-input>
                <span slot="prepend">prepend content</span>
                <span slot="append">append content</span>
            </am-input>
        </div>

        <div class="example-row">
            <am-input color="info"/>
            <am-input color="primary"/>
            <am-input color="success"/>
            <am-input color="warn"/>
            <am-input color="error"/>
            <am-button type="line">test button</am-button>
        </div>


        <div class="title">长输入框</div>

        <am-input color="error" long>
            <div slot="prepend">
                <span>this is prepend content</span>
            </div>
            <div slot="append">
                <span>this is append content</span>
            </div>
        </am-input>

    </div>
</template>

<script>


    export default {
        name: 'input-example',
        components: {},
        data() {
            return {
                val1: '输入框内容...',
            };
        },
    };
</script>

<style lang="scss">
    .input-example {
        width: 100%;
        height: 100%;

        vertical-align: center;
    }
</style>
