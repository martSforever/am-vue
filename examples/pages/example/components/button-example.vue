<template>
    <div class="button-example example-page">

        <div class="title">颜色</div>
        <div>
            <am-button color="primary">primary</am-button>
            <am-button color="info">info</am-button>
            <am-button color="success">success</am-button>
            <am-button color="warn">warn</am-button>
            <am-button color="error">error</am-button>
        </div>

        <div class="title">按钮大小</div>
        <div>
            <am-button size="large">large</am-button>
            <am-button size="default">default</am-button>
            <am-button size="small">small</am-button>
        </div>

        <div class="title">按钮形状</div>
        <div>
            <am-button shape="fillet">fillet</am-button>
            <am-button shape="round">round</am-button>
            <am-button shape="none">none</am-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'button-example'
    };
</script>

<style lang="scss">
    .button-example {

    }
</style>
