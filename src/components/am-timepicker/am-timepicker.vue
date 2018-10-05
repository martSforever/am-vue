<template>
    <div class="am-timepicker">
        <am-dropdown
            :width="180"
            :height="180"
        >
            <am-input slot="reference"/>
            <div slot="popover"
                 class="am-timepicker-content-wrapper"
            >
                <am-button-group size="small">
                    <am-button color="error">取消</am-button>
                    <am-button color="success">确定</am-button>
                </am-button-group>
            </div>
        </am-dropdown>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmDropdown from '../am-dropdown'
    import AmButtonGroup from '../am-button/am-button-group'
    import AmButton from '../am-button/am-button'

    export default {
        name: "am-timepicker",
        components: {
            AmInput,
            AmDropdown,
            AmButton,
            AmButtonGroup,
        },
    }
</script>
