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
                {},
                props,
                {currentValue: false}
            );
        },
        render(h) {
            return (
                <am-modal
                    value={this.currentValue}
                    onInput={(val) => this.currentValue = val}
                    onOn-confirm={this.handleConfirm}
                    onOn-cancel={this.handleCancel}

                    title={this.title}
                    message={this.message}
                    type={this.type}

                    shadow={this.shadow}
                    shadowColor={this.shadowColor}
                    shape={this.shape}
                    transitionName={this.transitionName}
                    height={this.height}
                    width={this.width}
                    full={this.full}
                    closeIcon={this.closeIcon}
                    vertical={this.vertical}
                    horizontal={this.horizontal}
                    top={this.top}
                    left={this.left}
                    bottom={this.bottom}
                    right={this.right}
                    maxable={this.maxable}
                    hideOnClickOutside={this.hideOnClickOutside}

                    confirmButton={!!this.confirmButton}
                    cancelButton={!!this.cancelButton}

                    contentRender={this.contentRender}
                    headRender={this.headRender}
                    footRender={this.footRender}

                    noHeader={this.noHeader}
                    noFooter={this.noFooter}
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
            if (instance.currentValue) console.warn('[amvue]$modal.show只会展示一个窗口，后面出现的窗口会替换掉原来的窗口');
            instance.currentValue = false;
            instance.$nextTick(() => {
                Object.keys(props).forEach((key) => instance[key] = props[key]);
                instance.currentValue = true;
            });
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
    instance = getInstance();
    props.onRemove = () => instance = null;
    instance.show(
        Object.assign({},
            {
                input: '',

                type: 'primary',
                hasInput: false,
                title: '通知',
                message: '消息内容',
                confirmButton: true,
                cancelButton: false,

                contentRender: null,
                headRender: null,
                footRender: null,

                shadow: true,
                shadowColor: 'rgba(0,0,0,0.25)',
                shape: 'fillet',
                transitionName: 'am-transition-from-bottom',
                height: '200px',
                width: '520px',
                full: false,
                closeIcon: true,
                vertical: 'start',
                horizontal: 'center',
                top: null,
                left: null,
                bottom: null,
                right: null,
                maxable: false,
                hideOnClickOutside: true,

                noHeader: false,
                noFooter: false,

            }, props)
    );
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
