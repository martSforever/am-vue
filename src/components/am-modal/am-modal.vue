<template>
    <div class="am-modal">
        <transition name="am-transition-fade">
            <div class="am-modal-shadow"
                 :style="shadowStyles"
                 v-show="!!shadow && !!currentValue"
                 v-dom-portal></div>
        </transition>
        <transition :name="transitionName">
            <div class="am-modal-body-wrapper"
                 v-show="!!currentValue"
                 :style="wrapperStyles"
                 v-click-outside="_handleClickOutside"
                 v-dom-portal>
                <div class="am-modal-body"
                     :style="bodyStyles"
                     :class="bodyClasses">
                    <div class="am-modal-body-head" v-if="!noHeader">
                        <am-rendering-render-func :render-func="headRender" v-if="!!headRender"/>
                        <slot name="head" v-if="!headRender">
                            <div class="am-modal-body-head-default">
                                <div>
                                    <am-icon :icon="types[type].icon" :color="types[type].color"/>
                                    <label>{{title}}</label>
                                </div>
                                <div class="am-modal-body-head-default-icon-bar">
                                    <am-icon icon="fas-window-minimize" v-if="!!minable" @click="_handleMinimize"/>
                                    <am-icon :icon="!!max?'fas-window-maximize':'far-window-maximize'"
                                             v-if="!!maxable"
                                             @click="max = !max"/>
                                    <am-icon icon="fas-times"
                                             v-if="closeIcon"
                                             class="am-modal-body-head-default-close-icon"
                                             @click="currentValue = false"/>
                                </div>
                            </div>
                        </slot>
                    </div>
                    <am-segment-line v-if="!noHeader"/>
                    <div class="am-modal-body-content"
                         :class="{'am-modal-body-content-no-header':!!noHeader,'am-modal-body-content-no-footer':!!noFooter}">
                        <am-rendering-render-func :render-func="contentRender" v-if="!!contentRender"/>
                        <slot v-if="!contentRender">
                            <div class="am-modal-body-content-default">{{message}}</div>
                        </slot>
                    </div>
                    <div class="am-modal-body-foot" v-if="!noFooter">
                        <am-rendering-render-func :render-func="footRender" v-if="!!footRender"/>
                        <slot name="foot" v-if="!footRender">
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
    import {oneOf} from '../../scripts/utils';
    import AmSegmentLine from '../../components/am-segment-line';
    import AmIcon from '../../components/am-icon';
    import AmButtonGroup from '../../components/am-button/am-button-group';
    import AmButton from '../../components/am-button/am-button';
    import * as vClickOutside from 'v-click-outside-x';
    import RenderingRenderFunc from '../am-render/rendering-render-func';
    import {MODAL_TYPES} from './index';
    import handler from './am-modal-handler';

    export default {
        name: 'am-modal',
        directives: {
            clickOutside: vClickOutside.directive
        },
        components: {
            AmSegmentLine,
            AmIcon,
            AmButton,
            AmButtonGroup,
            AmRenderingRenderFunc: RenderingRenderFunc
        },
        props: {
            value: {type: Boolean},
            shadow: {type: Boolean, default: true},
            shadowColor: {type: String, default: 'rgba(0,0,0,0.25)'},
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'none']);
                },
            },
            hideOnClickOutside: {type: Boolean, default: true},
            transitionName: {type: String, default: 'am-transition-from-bottom'},
            height: {default: '200px'},
            width: {default: '520px'},
            full: {type: Boolean},
            type: {
                type: String,
                default: 'primary',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error']);
                },
            },
            title: {type: String},
            message: {type: String},
            confirmButton: {type: Boolean},
            cancelButton: {type: Boolean},
            closeIcon: {type: Boolean, default: true},
            vertical: {
                type: String,
                default: 'start'
            },
            horizontal: {
                type: String,
                default: 'center'
            },

            top: {
                type: String,
            },
            left: {
                type: String,
                default: '0'
            },
            bottom: {
                type: String,
                default: '0'
            },
            right: {
                type: String,
                default: '0'
            },

            maxable: {type: Boolean},
            minable: {type: Boolean},

            contentRender: {type: Function},
            headRender: {type: Function},
            footRender: {type: Function},

            noHeader: {type: Boolean},
            noFooter: {type: Boolean},
            removeable: {type: Boolean},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        data() {
            return {
                currentValue: this.value,
                max: false,
                types: MODAL_TYPES,
                minimize: false,
            };
        },
        computed: {
            shadowStyles() {
                let styles = {};
                !!this.shadowColor && (styles.backgroundColor = this.shadowColor);
                return styles;
            },
            bodyClasses() {
                return [
                    `am-modal-body-shape-${this.shape}`
                ];
            },
            bodyStyles() {
                let styles = {};
                styles.minWidth = (!!this.full || !!this.max) ? '100vw' : this.width;
                styles.minHeight = (!!this.full || !!this.max) ? '100vh' : this.height;
                styles.transform = `translate(${this.horizontal === 'center' ? '-50%' : '0'},${this.vertical === 'center' ? '-50%' : '0'})`;
                if (!(!!this.full || !!this.max)) {
                    styles.left = this.left;
                    styles.right = this.right;
                    styles.bottom = this.bottom;
                    styles.top = this.calTop;
                }
                return styles;
            },
            wrapperStyles() {
                return {
                    [this.horizontal === 'end' ? 'right' : 'left']: `${this.horizontal === 'center' ? 50 : 0}%`,
                    [this.vertical === 'end' ? 'bottom' : 'top']: `${this.vertical === 'center' ? 50 : 0}%`,
                };
            },
            calTop() {
                if (!!this.top) return this.top;
                if (this.vertical === 'start' && this.horizontal === 'center') return '10vh';
                return '0';
            },
        },
        methods: {
            _handleConfirm() {
                this.$emit('on-confirm');
                this.currentValue = false;
            },
            _handleCancel() {
                this.$emit('on-cancel');
                this.currentValue = false;
            },
            _handleClickOutside() {
                if (!!this.currentValue && !!this.hideOnClickOutside && !this.minimize) {
                    this._handleCancel();
                }
            },
            _handleMinimize() {
                this.currentValue = false;
                handler.add(this);
            },
        },
        destroyed(){
            console.log('modal destroyed')
        },
    };
</script>
