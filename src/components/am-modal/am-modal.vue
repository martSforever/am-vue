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
                        <slot name="head">modal head</slot>
                    </div>
                    <div class="am-modal-body-content">
                        <slot>modal content</slot>
                    </div>
                    <div class="am-modal-body-foot">
                        <slot name="foot">modal foot</slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    import {oneOf} from "../../scripts/utils";

    export default {
        name: 'am-modal',
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
    };
</script>
