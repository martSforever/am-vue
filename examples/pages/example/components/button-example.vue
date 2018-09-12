<template>
    <div class="button-example example-page">

        <div class="title">按钮颜色</div>
        <div>
            <am-button color="primary">primary(default)</am-button>
            <am-button color="info">info</am-button>
            <am-button color="success">success</am-button>
            <am-button color="warn">warn</am-button>
            <am-button color="error">error</am-button>
        </div>

        <div class="title">按钮类型</div>
        <div style="margin-bottom: 12px">
            <div class="sub-title">fill type :</div>
            <am-button color="primary" type="fill">primary(default)</am-button>
            <am-button color="info" type="fill">info</am-button>
            <am-button color="success" type="fill">success</am-button>
            <am-button color="warn" type="fill">warn</am-button>
            <am-button color="error" type="fill">error</am-button>
        </div>
        <div style="margin-bottom: 12px">
            <div class="sub-title">line type :</div>
            <am-button color="primary" type="line">primary(default)</am-button>
            <am-button color="info" type="line">info</am-button>
            <am-button color="success" type="line">success</am-button>
            <am-button color="warn" type="line">warn</am-button>
            <am-button color="error" type="line">error</am-button>
        </div>
        <div style="margin-bottom: 12px">
            <div class="sub-title">none type :</div>
            <am-button color="primary" type="none">primary(default)</am-button>
            <am-button color="info" type="none">info</am-button>
            <am-button color="success" type="none">success</am-button>
            <am-button color="warn" type="none">warn</am-button>
            <am-button color="error" type="none">error</am-button>
        </div>

        <div class="title">按钮大小</div>
        <div>
            <am-button size="large">large</am-button>
            <am-button size="default">default(default)</am-button>
            <am-button size="small">small</am-button>
        </div>

        <div class="title">按钮形状</div>
        <div>
            <am-button shape="fillet">fillet(default)</am-button>
            <am-button shape="round">round</am-button>
            <am-button shape="none">none</am-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'button-example'
    };
</script>

<style lang="scss">
    .button-example {
        .sub-title {
            width: 100px;
            display: inline-block;
        }
    }
</style>
