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
        <div class="example-row">
            <am-switch :value="true" disabled/>
            <am-switch :value="false" disabled/>
        </div>
        <div class="title">文本</div>
        <div class="example-row" style="display: flex;align-items: center">
            <am-switch :value="true" label="自动保存"/>
            <am-switch :value="false" label="自动下载"/>
            <am-switch :value="false" label="自动下载" size="large"/>
            <am-switch :value="false" label="自动下载" size="small"/>
        </div>
        <div class="title">指示器插槽</div>
        <div class="example-row" style="display: flex;align-items: center">
            <am-switch :value="true" label="纯文本">帅</am-switch>
            <am-switch :value="true" color="error" label="图片">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=876967200,2230768406&fm=27&gp=0.jpg"
                     style="width: 100%;height: 32px;border-radius: 32px;display: block"/>
            </am-switch>
            <am-switch :value="true" color="primary" label="图标">
                <am-icon icon="fab-apple" size="32"/>
            </am-switch>
        </div>
        <div class="title">内容插槽</div>
        <am-switch :value="true" label="自定义背景内容">
            帅
            <span slot="left" style="padding-left: 0.5em;color: white">是</span>
            <span slot="right" style="padding-right: 0.5em;color: white">否</span>
        </am-switch>

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
