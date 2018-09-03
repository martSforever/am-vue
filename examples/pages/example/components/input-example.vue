<template>
    <div class="input-example">
        <textarea v-model="source" style="width: 300px;height: 100%"></textarea>
        <div>
        </div>
    </div>
</template>

<script>


    let source = require('../../markdowns/input.md');
    console.log(source);

    export default {
        name: 'input-example',
        components: {},
        data() {
            return {
                source
            };
        },
    };
</script>

<style lang="less">
    .input-example {
        width: 100%;
        height: 100%;
    }
</style>
