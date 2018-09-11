<template>
    <svg class="am-iconfont" aria-hidden="true">
        <use :xlink:href="'#'+$amvue.$options.IconfontPrefix+'-'+icon"></use>
    </svg>
</template>

<script>
    export default {
        name: 'am-iconfont',
        props: {
            icon: {
                type: String,
                required: true
            },
        },
    };
</script>
