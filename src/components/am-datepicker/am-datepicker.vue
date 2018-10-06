<template>
    <div class="am-datepicker">
        <am-input :suffix-icon="suffixIcon"/>
    </div>
</template>

<script>
    import AmInput from '../am-input'

    export default {
        name: "am-datepicker",
        components: {
            AmInput,
        },
        props: {
            suffixIcon: {type: String, default: 'fas-datetime'},
        },
    }
</script>
