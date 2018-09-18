<template>
    <div class="notice-example example-page">
        <div class="title">
            基本用法
        </div>
        <div class="example-row">
            <am-button label="$notice.show" @click="$notice.show({title:'title',message:'message'})"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'notice-example'
    };
</script>
