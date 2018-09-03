<template>
    <div class="container">
        this is app
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {}
        },
        mounted: function () {

        },
        beforeDestroy: function () {

        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    nav {
        margin-bottom: 40px;

        ul {
            display: flex;
            flex-wrap: wrap;
        }
        li {
            display: inline-block;
        }
        li + li {
            border-left: solid 1px #bbb;
            padding-left: 10px;
            margin-left: 10px;
        }
    }

    .container {
        padding: 10px 40px 0;
    }

    .v-link-active {
        color: #bbb;
    }
</style>
