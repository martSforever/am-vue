<template>
    <div class="input-area-example">
        <am-input-area v-model="val1"/>
        <am-input-area v-model="val1"/>
        <div>
            {{val1}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'input-area-example',
        data() {
            return {
                val1: '123'
            };
        },
    };
</script>

<style lang="scss">

</style>
