import Vue from 'vue'
import AmObjectPick from './am-object-pick';
import {AutoOption} from "../../src/components/am-auto-table/auto-option";

const component = new Vue({
    component: {AmObjectPick,},
    props: {
        renderFunc: {},
        option: {default: () => new AutoOption()},
    },
    render(h) {
        return (
            <am-object-pick
                ref="objectPick"
                class="object-pick-wrapper"
                option={this.option}
                value={this.show}
                onInput={this.handleUpdateShow}>
                {!!this.renderFunc && this.renderFunc.call(this._renderProxy, h, {})}
            </am-object-pick>
        )
    },
    data() {
        return {show: false,}
    },
    methods: {
        refreshRender() {
            this.$refs.objectPick.refreshRender();
        },
        handleUpdateShow(val) {
            this.show = val;
        },
    },
});
const instance = component.$mount()
document.body.appendChild(instance.$el);

const ObjectPick = {
    pick(renderFunc, option) {
        instance.renderFunc = renderFunc;
        instance.option = option;
        console.log('instance.option', instance.option)
        instance.option.reload();
        instance.$nextTick(() => instance.refreshRender())
        instance.show = true;
    },
}

export default ObjectPick;
