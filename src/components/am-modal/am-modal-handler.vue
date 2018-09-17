<template>
    <div class="am-modal-handler">
        <am-move-container>
            <am-move-item class="am-modal-handler-item" v-for="(instance) in instances" :key="instance.modalId"
                          :class="[`am-modal-handler-item-color-${instance.type}`]"
                          @click.native="handleClickItem(instance)">
                <am-icon :icon="types[instance.type].icon"/>
                <span>{{instance.title}}</span>
                <am-icon icon="fas-times" @click.stop="handleRemoveItem(instance)"/>
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
    import {uuid} from '../../scripts/utils';

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
        methods: {
            handleClickItem(modal) {
                modal.minimize = true;
                modal.currentValue = true;
                this.instances.splice(this.instances.indexOf(modal), 1);
            },
            handleRemoveItem(modal) {
                if (modal.removeable) {
                    modal.$emit('destroy-modal-service');
                } else {
                    modal.minimize = false;
                }
                this.instances.splice(this.instances.indexOf(modal), 1);
            },
        },
    };

    AmModalHandler.newInstance = (props = {}) => {
        const component = new Vue({
            components: {
                AmModalHandler,
            },
            data() {
                return {
                    instances: []
                };
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
        modal.modalId = uuid();
        getInstance().add(modal);
    };

    AmModalHandler.remove = (modal) => {
        getInstance().remove(modal);
    };

    export default AmModalHandler;
</script>
