<template>
    <div class="modal-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <am-button @click="show1 = !show1">toggle[{{show1}}]</am-button>
        </div>
        <am-modal v-model="show1" :shadow="true" full>
            this is modal content
        </am-modal>
    </div>
</template>

<script>
    export default {
        name: 'modal-example',
        data() {
            return {
                show1: false
            };
        },
    };
</script>

<style lang="scss">
    .modal-example {

    }
</style>
