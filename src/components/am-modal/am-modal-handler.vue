<template>
    <div class="am-modal-handler">
        <am-move-container>
            <am-move-item class="am-modal-handler-item" v-for="(instance) in instances" :key="instance.modalId"
                          :class="[`am-modal-handler-item-color-${instance.type}`]">
                <am-icon :icon="types[instance.type].icon"/>
                <span>{{instance.title}}</span>
                <am-icon icon="fas-window-restore"/>
                <am-icon icon="fas-times"/>
            </am-move-item>
        </am-move-container>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AmIcon from '../am-icon';
    import {MODAL_TYPES} from './index';
    import AmMoveContainer from '../am-move/am-move-container';
    import AmMoveItem from '../am-move/am-move-item';

    const AmModalHandler = {
        name: 'am-modal-handler',
        components: {
            AmIcon,
            AmMoveContainer,
            AmMoveItem
        },
        props: {
            instances: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {types: MODAL_TYPES};
        },
    };

    AmModalHandler.newInstance = (props = {}) => {
        const component = new Vue({
            components: {
                AmModalHandler,
            },
            data() {
                return Object.assign(
                    {instances: []},
                    props,
                );
            },
            render(h) {
                return (
                    <am-modal-handler instances={this.instances}/>
                );
            },
            methods: {
                add(instance) {
                    this.instances.push(instance);
                },
                remove(instance) {
                    this.instances.splice(this.instances.indexOf(instance), 1);
                },
            },
        });
        let instance = component.$mount();
        document.body.appendChild(instance.$el);
        return instance;
    };

    let instance;

    function getInstance() {
        if (!instance) instance = AmModalHandler.newInstance({});
        return instance;
    }

    AmModalHandler.add = (modal) => {
        getInstance().add(modal);
    };

    AmModalHandler.remove = (modal) => {
        getInstance().remove(modal);
    };

    export default AmModalHandler;
</script>
