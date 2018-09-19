<template>
    <div class="tag-example example-page">
        <div class="title">基本用法</div>
        <div class="example-row">
            <div class="example-row">
                <am-button-group>
                    <am-button @click="tags1.push({label: 'new tag'})">push</am-button>
                    <am-button @click="tags1.pop()">pop</am-button>
                </am-button-group>
            </div>
            <am-tag-input
                :tags="tags1"
                @confirm="handleConfirm"
                disabled
            />
            <am-button label="button"/>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'tag-example',
        data() {
            return {
                tags1: [
                    {color: 'primary', label: 'primary'},
                    {color: 'info', label: 'info'},
                    {color: 'success', label: 'success'},
                    {color: 'warn', label: 'warn'},
                    {color: 'error', label: 'error'},
                ]
            };
        },
        methods: {
            handleConfirm(label) {
                this.tags1.push({label});
            },
        },
    };
</script>

<style lang="scss">

</style>
