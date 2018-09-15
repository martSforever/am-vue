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
        <div class="example-row">
            <am-button size="default" label="small button"/>
            <am-radio :value="true" label="我已经阅读授权协议" size="36"/>
        </div>
        <div class="example-row">
            <am-button size="large" label="small button"/>
            <am-radio :value="true" label="我已经阅读授权协议" size="44"/>
        </div>

        <div class="title">设置[active/inactive]icon</div>
        <div class="example-row">
            <am-radio :value="true" label="我已经阅读授权协议" v-model="val1"/>
            <am-radio :value="true" label="我已经阅读授权协议" v-model="val1"
                      active-icon="fas-star"
                      inactive-icon="far-star"/>
            <am-radio :value="true" label="我已经阅读授权协议" v-model="val1"
                      active-icon="fas-check-circle"
                      inactive-icon="far-circle"/>
        </div>
        <div class="title">设置[active/inactive]颜色</div>
        <div class="example-row">
            <am-radio :value="true" label="我已经阅读授权协议" active-color="#43B973" inactive-color="#808695"/>
        </div>

        <div class="title">设置[active/inactive]插槽</div>
        <div class="example-row">
            <am-radio :value="true" label="我已经阅读授权协议">
                <div slot="active">
                    <img :src="CONST.avatar" style="height: 28px;width: 28px;border-radius: 28px"/>
                </div>
                <div slot="inactive">
                    <img
                        :src="'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1406845658,3964070478&fm=26&gp=0.jpg'"
                        style="height: 28px;width: 28px;border-radius: 28px"/>
                </div>
            </am-radio>
        </div>
        <div class="title">单选/多选按钮组，当radio
            group指定size、color、active-icon、inactive-icon、active-color、inactive-color的时候，插槽中的radio会默认使用radio-group的值
        </div>
        <div class="example-row">
            <am-radio-group size="30" color="error" active-icon="fas-plus" inactive-icon="fas-minus"
                            active-color="#43B973" inactive-color="#808695">
                <am-radio label="饼干" size="20" color="error"/>
                <am-radio label="牛奶" size="30" color="success"/>
                <am-radio label="鸡蛋" size="40" color="warn"/>
            </am-radio-group>
        </div>

        <div class="title">单选</div>
        <div class="example-row">
            <div class="example-row">
                <am-button>{{groupVal2}}</am-button>
            </div>
            <am-radio-group v-model="groupVal2">
                <am-radio label="单选" radio-key="single"/>
                <am-radio label="饼干" radio-key="binggan"/>
                <am-radio label="牛奶" radio-key="niunai"/>
                <am-radio label="鸡蛋" radio-key="jidan"/>
            </am-radio-group>
        </div>
        <div class="title">多选</div>
        <div class="example-row">
            <div class="example-row">
                <am-button>{{groupVal1}}</am-button>
            </div>
            <am-radio-group multiple v-model="groupVal1">
                <am-radio label="多选" radio-key="multiple"/>
                <am-radio label="饼干" radio-key="binggan"/>
                <am-radio label="牛奶" radio-key="niunai"/>
                <am-radio label="鸡蛋" radio-key="jidan"/>
            </am-radio-group>
        </div>
        <div class="title">纵向</div>
        <div class="example-row">
            <am-radio-group vertical v-model="groupVal2">
                <am-radio label="单选" radio-key="single"/>
                <am-radio label="饼干" radio-key="binggan"/>
                <am-radio label="牛奶" radio-key="niunai"/>
                <am-radio label="鸡蛋" radio-key="jidan"/>
            </am-radio-group>
            <am-radio-group vertical multiple v-model="groupVal1">
                <am-radio label="多选" radio-key="multiple"/>
                <am-radio label="饼干" radio-key="binggan"/>
                <am-radio label="牛奶" radio-key="niunai"/>
                <am-radio label="鸡蛋" radio-key="jidan"/>
            </am-radio-group>
        </div>

    </div>
</template>

<script>
    import CONST from '../../../scripts/const';

    export default {
        name: 'radio-example',
        data() {
            return {
                val1: true,
                CONST,
                groupVal1: ['jidan'],
                groupVal2: 'niunai'
            };
        },
    };
</script>
