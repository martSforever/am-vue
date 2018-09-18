<template>
    <div class="am-notice-container" :style="containerStyles">
        <div class="am-notice-wrapper" :style="contentStyles">
            <am-move-container>
                <am-move-item v-for="(option) in noticeOptions" :key="option.id">
                    <am-notice
                        :message="option.message"
                        :title="option.title"
                        :type="option.type"
                        :auto-close="option.autoClose"
                        :duration="option.duration"
                        :render-func="option.renderFunc"
                        :shape="option.shape"
                        :closable="option.closable"
                        @close="_handleClose(option)"/>
                </am-move-item>
            </am-move-container>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import AmNotice from './am-notice';
    import AmMoveContainer from '../am-move/am-move-container';
    import AmMoveItem from '../am-move/am-move-item';
    import {oneOf, uuid} from '../../scripts/utils';

    const NoticeContainer = {
        name: 'am-notice-container',
        components: {
            AmNotice,
            AmMoveContainer,
            AmMoveItem,
        },
        props: {
            horizontal: {
                type: String,
                default: 'end',
                validator(val) {
                    return oneOf(val, ['start', 'center', 'end']);
                },
            },
            vertical: {
                type: String,
                default: 'start',
                validator(val) {
                    return oneOf(val, ['start', 'center', 'end']);
                },
            },
        },
        data() {
            return {
                noticeOptions: []
            };
        },
        methods: {
            addNotice(options) {
                options.id = uuid();
                options.close = () => this._handleClose(options);
                this.noticeOptions.push(options);
                return options;
            },
            _getContainerStylesData() {
                return {
                    [this.horizontal === 'end' ? 'right' : 'left']: this.horizontal === 'center' ? 50 : 0,
                    [this.vertical === 'end' ? 'bottom' : 'top']: this.vertical === 'center' ? 50 : 0,
                };
            },
            _handleClose(option) {
                this.noticeOptions.splice(this.noticeOptions.indexOf(option), 1);
            },
        },
        computed: {
            containerStyles() {
                let containerStyles = this._getContainerStylesData();
                Object.keys(containerStyles).forEach(key => containerStyles[key] = `${containerStyles[key]}%`);
                return containerStyles;
            },
            contentStyles() {
                let contentStyles = this._getContainerStylesData();
                Object.keys(contentStyles).forEach(key => contentStyles[key] = `${-contentStyles[key]}%`);
                return contentStyles;
            },
        },
        newInstance(props) {
            const component = new Vue({
                render(h) {
                    return h(NoticeContainer, {props});
                },
            });
            const instance = component.$mount();
            document.body.appendChild(instance.$el);
            return instance.$children[0];
        }
    };

    export default NoticeContainer;
</script>
