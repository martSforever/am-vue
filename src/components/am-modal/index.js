import AmModal from './am-modal';
import AmInput from '../am-input';
import Vue from 'vue';

AmModal.newInstance = (props = {}) => {
    const component = new Vue({
        components: {
            AmModal,
            AmInput
        },
        data() {
            return Object.assign(
                {
                    type: 'primary',
                    confirmButton: true,
                    cancelButton: false,
                    input: '',
                    hasInput: false,
                    title: '通知',
                    message: '消息内容'
                },
                props,
                {currentValue: false}
            );
        },
        render(h) {
            return (
                <am-modal
                    value={this.currentValue}
                    title={this.title}
                    message={this.message}
                    type={this.type}
                    confirmButton={!!this.onConfirm}
                    cancelButton={!!this.onCancel}
                    onOn-confirm={this.handleConfirm}
                    onOn-cancel={this.handleCancel}
                >
                    <div class="am-modal-service-content-wrapper">
                        <div v-show={!!this.message} class="am-modal-service-content-message">{this.message}</div>
                        <div v-show={this.hasInput}>
                            <am-input value={this.input} onInput={this.handleInput} long color="primary"/>
                        </div>
                    </div>
                </am-modal>
            );
        },
        methods: {
            destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            remove() {
                setTimeout(() => this.destroy(), 300);
            },
            handleConfirm() {
                !!this.onConfirm && this.onConfirm(this.input);
            },
            handleCancel() {
                !!this.onCancel && this.onCancel();
            },
            handleInput(val) {
                this.input = val;
            },
        },
    });
    const instance = component.$mount();
    document.body.appendChild(instance.$el);
    return {
        show(props) {
            Object.keys(props).forEach((key) => instance[key] = props[key]);
            instance.currentValue = true;
        },
        remove() {
            instance.currentValue = false;
            instance.remove();
        },
    };
};

let instance;

function getInstance() {
    return instance || AmModal.newInstance({});
}

function showModal(props) {
    let instance = getInstance();
    props.onRemove = () => instance = null;
    instance.show(props);
}

const types = ['primary', 'info', 'success', 'warn', 'error'];

types.forEach((type) => {
    AmModal[type] = (props) => {
        props.type = type;
        return showModal(props);
    };
});

AmModal.show = (props) => {
    return showModal(props);
};

export default AmModal;
