<template>
    <div class="am-modal">
        <transition name="am-transition-fade">
            <div class="am-modal-shadow"
                 :style="shadowStyles"
                 @click="currentValue = false"
                 v-show="!!shadow && !!currentValue"
                 v-dom-portal></div>
        </transition>
        <transition :name="transitionName">
            <div class="am-modal-body-wrapper"
                 v-show="!!currentValue"
                 v-dom-portal>
                <div class="am-modal-body"
                     :style="bodyStyles"
                     :class="bodyClasses">
                    <div class="am-modal-body-head">
                        <slot name="head">
                            <div class="am-modal-body-head-default">
                                <div>
                                    <am-icon :icon="types[type].icon" :color="types[type].color"/>
                                    <label>{{title}}</label>
                                </div>
                                <am-icon icon="fas-times"
                                         class="am-modal-body-head-default-close-icon"
                                         @click="currentValue = false"/>
                            </div>
                        </slot>
                    </div>
                    <am-segment-line/>
                    <div class="am-modal-body-content">
                        <slot>
                            <div class="am-modal-body-content-default">{{message}}</div>
                        </slot>
                    </div>
                    <div class="am-modal-body-foot">
                        <slot name="foot">
                            <div class="am-modal-body-foot-default">
                                <am-button-group size="small">
                                    <am-button color="success" @click="_handleConfirm">确认</am-button>
                                    <am-button color="error" @click="_handleCancel">取消</am-button>
                                </am-button-group>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    import {oneOf} from "../../scripts/utils";
    import AmSegmentLine from '../../components/am-segment-line'
    import AmIcon from '../../components/am-icon'
    import AmButtonGroup from '../../components/am-button/am-button-group'
    import AmButton from '../../components/am-button/am-button'

    export default {
        name: 'am-modal',
        components: {
            AmSegmentLine,
            AmIcon,
            AmButton,
            AmButtonGroup,
        },
        props: {
            value: {type: Boolean},
            shadow: {type: Boolean, default: true},
            shadowColor: {type: String, default: 'rgba(0,0,0,0.25)'},
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'round', 'none']);
                },
            },
            transitionName: {type: String, default: 'am-transition-from-bottom'},
            marginTop: {
                default: '10%'
            },
            height: {default: '200px'},
            width: {default: '520px'},
            full: {type: Boolean},
            type: {
                type: String,
                default: 'info',
                validator(val) {
                    return oneOf(val, ['info', 'success', 'warn', 'error'])
                },
            },
            title: {type: String},
            message: {type: String},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                currentValue: this.value,
                types: {
                    info: {icon: 'fas-info-circle', color: '#808695'},
                    success: {icon: 'fas-check-circle', color: '#43B973'},
                    warn: {icon: 'fas-exclamation-circle', color: '#ffb020'},
                    error: {icon: 'fas-times-circle', color: '#ED4114'},
                }
            }
        },
        computed: {
            shadowStyles() {
                let styles = {}
                !!this.shadowColor && (styles.backgroundColor = this.shadowColor)
                return styles
            },
            bodyClasses() {
                return [
                    `am-modal-body-shape-${this.shape}`
                ]
            },
            bodyStyles() {
                let styles = {}
                styles.width = !!this.full ? '100vw' : this.width
                styles.height = !!this.full ? '100vh' : this.height
                return styles
            },
        },
        methods: {
            _handleConfirm() {
                this.$emit('confirm')
            },
            _handleCancel() {
                this.$emit('cancel')
            },
        },
    };
</script>
