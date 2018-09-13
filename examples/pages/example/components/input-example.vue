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
        <div class="title">大小</div>
        <div class="example-row">
            <am-input color="info" size="large"/>
            <am-input color="primary" size="large"/>
            <am-input color="success" size="large"/>
            <am-input color="warn" size="large"/>
            <am-input color="error" size="large"/>
            <am-button type="line" size="large">这是个按钮</am-button>
        </div>
        <div class="example-row">
            <am-input color="info" size="default"/>
            <am-input color="primary" size="default"/>
            <am-input color="success" size="default"/>
            <am-input color="warn" size="default"/>
            <am-input color="error" size="default"/>
            <am-button type="line" size="default">这是个按钮</am-button>
        </div>
        <div class="example-row">
            <am-input color="info" size="small"/>
            <am-input color="primary" size="small"/>
            <am-input color="success" size="small"/>
            <am-input color="warn" size="small"/>
            <am-input color="error" size="small"/>
            <am-button type="line" size="small">这是个按钮</am-button>
        </div>
        <div class="title">形状</div>
        <div class="example-row">
            <am-input color="info"/>
            <am-input color="primary"/>
            <am-input color="success"/>
            <am-input color="warn"/>
            <am-input color="error"/>
            <am-button type="line">这是个按钮</am-button>
        </div>
        <div class="example-row">
            <am-input color="info" shape="round"/>
            <am-input color="primary" shape="round"/>
            <am-input color="success" shape="round"/>
            <am-input color="warn" shape="round"/>
            <am-input color="error" shape="round"/>
            <am-button type="line" shape="round">这是个按钮</am-button>
        </div>
        <div class="example-row">
            <am-input color="info" shape="none"/>
            <am-input color="primary" shape="none"/>
            <am-input color="success" shape="none"/>
            <am-input color="warn" shape="none"/>
            <am-input color="error" shape="none"/>
            <am-button type="line" shape="none">这是个按钮</am-button>
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

        <div class="title">前置图标以及后置图标</div>
        <div class="example-row">
            <am-input prefix-icon="fas-plus" suffix-icon="fas-times"/>
        </div>
        <div class="title">前置内容以及后置内容</div>
        <div class="example-row">
            <am-input prefix-icon="fas-globe" suffix-icon="fas-at" color="primary" value="www.baidu.com">
                <span slot="prepend"><am-button label="email"/></span>
                <span slot="append"><am-button label="aliyun.com"/></span>
            </am-input>
        </div>
        <div class="title">长输入框</div>
        <am-input prefix-icon="fas-globe" suffix-icon="fas-at" color="primary" value="www.baidu.com" long>
            <span slot="prepend"><am-button label="email"/></span>
            <span slot="append"><am-button label="aliyun.com"/></span>
        </am-input>
        <div class="title">虚线输入框</div>
        <div class="example-row">
            <am-input color="info" dashed/>
            <am-input color="primary" dashed/>
            <am-input color="success" dashed/>
            <am-input color="warn" dashed/>
            <am-input color="error" dashed/>
            <am-button>这是个按钮</am-button>
        </div>
        <div class="title">禁用状态</div>
        <div class="example-row">
            <am-input disabled value="内容文本"/>
            <am-button disabled>这是个按钮</am-button>
        </div>
        <div class="title">清除按钮</div>
        <div class="example-row">
            <am-input clearable v-model="val1"/>
            <span>{{val1}}</span>
        </div>
        <div class="title">通过正则表达式限制输入的文本，比如这里通过:[regexp="/[^0-9.]/g"]限制只能输入数字以及小数点</div>
        <div class="example-row">
            <am-input clearable
                      @change="handleChange"
                      @focus="handleFocus"
                      @enter="handleKeyupEnter"
                      :regexp="/[^0-9.]/g"/>
        </div>

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
        methods: {
            handleChange(e) {
                // console.log(e);
            },
            handleFocus() {
                console.log('focus');
            },
            handleKeyupEnter(e) {
                console.log('handleKeyupEnter', e);
            },
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
