<template>
    <div class="am-radio-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-radio/>
        </div>
        <div class="title">常用颜色</div>
        <div class="example-row">
            <am-radio color="primary"/>
            <am-radio color="info"/>
            <am-radio color="success"/>
            <am-radio color="warn"/>
            <am-radio color="error"/>
            <am-button label="button"/>
        </div>

        <div class="title">设置文字大小，单位为px</div>
        <div class="example-row">
            <am-radio color="primary" size="24"/>
            <am-radio color="info" size="24"/>
            <am-radio color="success" size="24"/>
            <am-radio color="warn" size="24"/>
            <am-radio color="error" size="24"/>
            <am-button label="button"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'radio-example'
    };
</script>
