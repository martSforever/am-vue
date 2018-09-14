<template>
    <div class="switch-example example-page">
        <div class="title">基本用法</div>
        <am-switch :value="true"/>

        <div class="title">颜色</div>
        <div class="example-row">
            <am-switch :value="true" color="primary"/>
            <am-switch :value="true" color="info"/>
            <am-switch :value="true" color="success"/>
            <am-switch :value="true" color="warn"/>
            <am-switch :value="true" color="error"/>
        </div>

        <div class="title">大小</div>
        <div class="example-row">
            <am-switch :value="true" color="primary" size="large"/>
            <am-switch :value="true" color="info" size="large"/>
            <am-switch :value="true" color="success" size="large"/>
            <am-switch :value="true" color="warn" size="large"/>
            <am-switch :value="true" color="error" size="large"/>
            <am-button size="large" label="这是个按钮"/>
        </div>
        <div class="example-row">
            <am-switch :value="true" color="primary" size="default"/>
            <am-switch :value="true" color="info" size="default"/>
            <am-switch :value="true" color="success" size="default"/>
            <am-switch :value="true" color="warn" size="default"/>
            <am-switch :value="true" color="error" size="default"/>
            <am-button size="default" label="这是个按钮"/>
        </div>
        <div class="example-row">
            <am-switch :value="true" color="primary" size="small"/>
            <am-switch :value="true" color="info" size="small"/>
            <am-switch :value="true" color="success" size="small"/>
            <am-switch :value="true" color="warn" size="small"/>
            <am-switch :value="true" color="error" size="small"/>
            <am-button size="small" label="这是个按钮"/>
        </div>

        <div class="title">禁用</div>
        <am-switch :value="true" disabled/>
        <am-switch :value="false" disabled/>

    </div>
</template>

<script>
    export default {
        name: 'switch-example',

    };
</script>

<style lang="scss">
    .example-page {

    }
</style>
