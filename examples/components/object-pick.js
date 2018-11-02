import Vue from 'vue'
import AmObjectPick from './am-object-pick';

let instance = null;

const ObjectPick = {
    new(renderFunc, option) {
        const component = new Vue({
            component: {
                AmObjectPick,
            },
            props: {},
            render(h) {
                return (
                    <am-object-pick class="object-pick-wrapper" option={option} value={this.show} onInput={this.handleUpdateShow}>
                        {!!renderFunc && renderFunc.call(this._renderProxy, h, {})}
                    </am-object-pick>
                )
            },
            created() {
                console.log('option', option, renderFunc)
            },
            data() {
                return {
                    show: false,
                }
            },
            methods: {
                handleUpdateShow(val) {
                    this.show = val;
                },
            },
        });
        const instance = component.$mount()
        document.body.appendChild(instance.$el);
        return instance;
    },

    pick(renderFunc, option) {
        instance = instance || this.new(renderFunc, option)
        instance.$nextTick(() => instance.show = true)
    },
}

export default ObjectPick;
