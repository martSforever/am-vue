import Vue from 'vue'
import AmObjectPick from './am-object-pick';
import {AutoOption} from "../../src/components/am-auto-table/auto-option";

const component = new Vue({
    component: {AmObjectPick,},
    render(h) {
        return (
            <am-object-pick
                ref="objectPick"
                class="object-pick-wrapper"
                option={this.option}
                value={this.show}
                singleSelect={this.singleSelect}
                onInput={this.handleUpdateShow}
                onConfirm={this.handleConfirm}
                onCancel={this.handleCancel}
            >
                {!!this.renderFunc && this.renderFunc.call(this._renderProxy, h, {})}
            </am-object-pick>
        )
    },
    data() {
        return {
            show: false,

            renderFunc: null,
            option: new AutoOption({}),
            singleSelect: true,
            onConfirm: null,
            onCancel: null,
            onComplete: null,
        }
    },
    methods: {
        refreshRender() {
            this.$refs.objectPick.refreshRender();
        },
        handleUpdateShow(val) {
            this.show = val;
        },
        handleConfirm(rows) {
            if (!rows || rows.length === 0) {
                this.handleCancel();
                return;
            }
            !!this.onConfirm && this.onConfirm(!!this.singleSelect ? rows[0] : rows)
            !!this.onComplete && this.onComplete(rows)
        },
        handleCancel() {
            !!this.onCancel && this.onCancel();
            !!this.onComplete && this.onComplete();
        },
    },
});
const instance = component.$mount()
document.body.appendChild(instance.$el);

const ObjectPick = {
    pick({
             renderFunc,
             option,
             singleSelect = true,
             onConfirm,
             onCancel,
             onComplete,
         }) {
        instance.renderFunc = renderFunc;
        instance.option = option;
        instance.singleSelect = singleSelect;
        Object.assign(instance, {renderFunc, option, singleSelect, onConfirm, onCancel, onComplete,})
        instance.option.reload();
        instance.$nextTick(() => instance.refreshRender())
        instance.show = true;
    },
}

export default ObjectPick;
