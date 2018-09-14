<template>
    <div class="am-radio-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-radio :value="true"/>
        </div>
        <div class="title">常用颜色</div>
        <div class="example-row">
            <am-radio color="primary" :value="true"/>
            <am-radio color="info" :value="true"/>
            <am-radio color="success" :value="true"/>
            <am-radio color="warn" :value="true"/>
            <am-radio color="error" :value="true"/>
        </div>

        <div class="title">设置文字大小，单位为px</div>
        <div class="example-row align-center">
            <am-radio color="primary" size="28" :value="true"/>
            <am-radio color="info" size="28" :value="true"/>
            <am-radio color="success" size="28" :value="true"/>
            <am-radio color="warn" size="28" :value="true"/>
            <am-radio color="error" size="28" :value="true"/>
            <am-button label="button" size="small"/>
        </div>
        <div class="example-row align-center">
            <am-radio color="primary" size="36" :value="true"/>
            <am-radio color="info" size="36" :value="true"/>
            <am-radio color="success" size="36" :value="true"/>
            <am-radio color="warn" size="36" :value="true"/>
            <am-radio color="error" size="36" :value="true"/>
            <am-button label="button" size="default"/>
        </div>
        <div class="example-row align-center">
            <am-radio color="primary" size="44" :value="true"/>
            <am-radio color="info" size="44" :value="true"/>
            <am-radio color="success" size="44" :value="true"/>
            <am-radio color="warn" size="44" :value="true"/>
            <am-radio color="error" size="44" :value="true"/>
            <am-button label="button" size="large"/>
        </div>

        <div class="title">设置文本</div>
        <div class="example-row">
            <am-button size="small" label="small button"/>
            <am-radio :value="true" label="我已经阅读授权协议" size="28"/>
        </div>

        <div class="title">设置icon</div>
        <div class="example-row">
            <am-radio :value="true" label="我已经阅读授权协议" v-model="val1"/>
            <am-radio :value="true" label="我已经阅读授权协议" v-model="val1" active-icon="fas-thumbs-up"
                      inactive-icon="far-thumbs-up"/>
        </div>
        <div class="title">设置active/inactive 颜色</div>
        <div class="example-row">
            <am-radio :value="true" label="我已经阅读授权协议" active-color="#43B973" inactive-color="#ffb020"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'radio-example',
        data() {
            return {
                val1: true,
            };
        },
    };
</script>
