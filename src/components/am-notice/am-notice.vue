<template>
    <div class="am-notice" :class="[`am-notice-shape-${shape}`]">
        <div class="am-notice-default" v-if="!renderFunc">
            <div class="am-notice-default-content-title"
                 :style="{backgroundColor:MODAL_TYPES[type].color,color:'white'}">
                <div>
                    <am-icon :icon="MODAL_TYPES[type].icon"/>
                    <span class="am-notice-default-content-text">{{title}}</span>
                </div>
                <am-icon icon="fas-times" @click="close" class="am-notice-default-content-close-icon" v-if="!!closable"/>
            </div>
            <div class="am-notice-default-content-message">{{message}}</div>
        </div>
        <div class="am-notice-render" v-if="!!renderFunc">
            <am-rendering-render-func :render-func="renderFunc"/>
        </div>
    </div>
</template>

<script>

    import AmIcon from '../am-icon';
    import AmRenderingRenderFunc from '../am-render/rendering-render-func';
    import {oneOf} from '../../scripts/utils';
    import {MODAL_TYPES} from '../am-modal';

    export default {
        name: 'am-notice',
        components: {
            AmIcon,
            AmRenderingRenderFunc
        },
        props: {
            duration: {
                type: Number,
                default: 3000,
            },
            message: {
                type: String,
            },
            title: {
                type: String,
                default: 'Notice Title',
            },
            closable: {
                type: Boolean,
                default: true,
            },
            autoClose: {
                type: Boolean,
                default: true,
            },
            type: {
                type: String,
                default: 'info',
                validator(val) {
                    return oneOf(val, ['primary', 'info', 'success', 'warn', 'error']);
                },
            },
            shape: {
                type: String,
                default: 'fillet',
                validator(val) {
                    return oneOf(val, ['fillet', 'none']);
                },
            },
            renderFunc: {
                type: Function,
            },
        },
        data() {
            return {
                MODAL_TYPES,
            };
        },
        methods: {
            close() {
                this.$emit('close');
            },
        },
        mounted() {
            !!this.autoClose && setTimeout(() => this.close(), this.duration);
        },
    };
</script>
