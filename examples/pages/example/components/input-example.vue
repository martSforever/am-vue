<template>
    <div class="input-example example-page">
        <am-input color="primary" v-model="val1"/>
        <am-input color="info" v-model="val1"/>
        <am-input color="success" v-model="val1"/>
        <am-input color="warn" v-model="val1"/>
        <am-input color="error" v-model="val1"/>
        <am-button>test button</am-button>

        <am-input color="error" v-model="val1" long>
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
                val1: 'hello world',
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
