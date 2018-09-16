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
                 :style="wrapperStyles"
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
                                <div class="am-modal-body-head-default-icon-bar">
                                    <am-icon :icon="!!max?'fas-window-maximize':'far-window-maximize'"
                                             @click="max = !max"/>
                                    <am-icon icon="fas-times"
                                             v-if="closeIcon"
                                             class="am-modal-body-head-default-close-icon"
                                             @click="currentValue = false"/>
                                </div>
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
                            <div class="am-modal-body-foot-default" v-if="!!confirmButton || !!cancelButton">
                                <am-button-group size="small">
                                    <am-button color="success" @click="_handleConfirm" v-if="!!confirmButton">
                                        确认
                                    </am-button>
                                    <am-button color="error" @click="_handleCancel" v-if="!!cancelButton">取消</am-button>
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
    import {deepCopy, oneOf} from "../../scripts/utils";
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
            height: {default: '200px'},
            width: {default: '520px'},
            full: {type: Boolean},
            type: {
                type: String,
                default: 'primary',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error'])
                },
            },
            title: {type: String},
            message: {type: String},
            confirmButton: {type: Boolean},
            cancelButton: {type: Boolean},
            closeIcon: {type: Boolean, default: true},
            marginTop: {
                default: '10%'
            },
            vertical: {
                type: String,
                default: 'top'
            },
            horizontal: {
                type: String,
                default: 'center'
            },
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
                max: false,
                types: {
                    primary: {icon: 'fas-desktop', color: '#2D8DF0'},
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
                styles.minWidth = (!!this.full || !!this.max) ? '100vw' : this.width
                styles.minHeight = (!!this.full || !!this.max) ? '100vh' : this.height
                styles.transform = `translate(${this.horizontal === 'center' ? '-50%' : '0'},${this.vertical === 'center' ? '-50%' : '0'})`
                return styles
            },
            wrapperStyles() {
                return {
                    [this.horizontal === 'end' ? 'right' : 'left']: `${this.horizontal === 'center' ? 50 : 0}%`,
                    [this.vertical === 'end' ? 'bottom' : 'top']: `${this.vertical === 'center' ? 50 : 0}%`,
                }
            },
        },
        methods: {
            _handleConfirm() {
                this.$emit('confirm')
                this.currentValue = false
            },
            _handleCancel() {
                this.$emit('cancel')
                this.currentValue = false
            },
        },
    };
</script>
