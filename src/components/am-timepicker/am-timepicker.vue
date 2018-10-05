<template>
    <div class="am-timepicker">
        <am-input ref="input"
                  @click="currentShow = true"
                  :suffix-icon="suffixIcon"
        />
        <am-popover
            reference-name="input"
            parent-name="am-timepicker"
            v-model="currentShow"
        >
            <div class="am-timepicker-content-wrapper">
                <div class="am-timepicker-spinner-wrapper">
                    <am-time-spinner :num="24"/>
                    <am-time-spinner :num="60"/>
                    <am-time-spinner :num="60"/>
                </div>
                <am-button-group size="small">
                    <am-button color="error" type="none">取消</am-button>
                    <am-button color="success" type="none">确定</am-button>
                </am-button-group>
            </div>
        </am-popover>
    </div>
</template>

<script>
    import AmInput from '../am-input'
    import AmButtonGroup from '../am-button/am-button-group'
    import AmButton from '../am-button/am-button'
    import AmTimeSpinner from './am-time-spinner'
    import AmPopover from '../am-popover'

    export default {
        name: "am-timepicker",
        components: {
            AmInput,
            AmButton,
            AmButtonGroup,
            AmTimeSpinner,
            AmPopover,
        },
        props: {
            show: {type: Boolean, default: false},

            suffixIcon: {type: String, default: 'fas-clock'},
        },
        data() {
            return {
                currentShow: this.show
            }
        },
    }
</script>
