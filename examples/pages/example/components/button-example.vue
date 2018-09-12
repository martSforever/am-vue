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

        <div class="title">按钮虚线边框</div>
        <div style="margin-bottom: 12px">
            <am-button color="primary" type="line" dashed>primary(default)</am-button>
            <am-button color="info" type="line" dashed>info</am-button>
            <am-button color="success" type="line" dashed>success</am-button>
            <am-button color="warn" type="line" dashed>warn</am-button>
            <am-button color="error" type="line" dashed>error</am-button>
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

        <div class="title">快速设置文字（当存在默认插槽，label属性不起作用）</div>
        <div>
            <am-button label="label"/>
        </div>

        <div class="title">图标按钮（当存在默认插槽，icon属性不起作用）</div>
        <div>
            <am-button label='icon="fas-plus"' icon="fas-plus"/>
            <am-button label="icon-loading" icon="fas-spinner" icon-loading/>
            <am-button label='icon-position="left"(default)' icon="fas-plus" icon-position="left"/>
            <am-button label='icon-position="right"' icon="fas-plus" icon-position="right"/>
            <am-button icon="fas-plus" icon-only/>
            <am-button icon="fas-check" icon-only color="success"/>
            <am-button icon="fas-times" icon-only color="error"/>
        </div>
        <div class="title">长按钮</div>
        <div>
            <am-button label='long' long/>
        </div>
        <div class="title">禁用按钮</div>
        <div>
            <am-button label='not disabled' @click="sayHello"/>
            <am-button label='disabled' disabled/>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'button-example',
        methods: {
            sayHello() {
                alert('hello');
            },
        },
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
