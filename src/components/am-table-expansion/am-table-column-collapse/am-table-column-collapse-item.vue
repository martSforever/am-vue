<template>
    <am-radio
        v-model="currentValue"
        :active-icon="activeIcon"
        :inactive-icon="inactiveIcon"
    />
</template>

<script>
    import AmRadio from '../../am-radio/am-radio';
    import tableEditItemMixin from '../table-edit-item-mixin';
    import {findComponentUpward, findComponentsDownward, insertAfter} from '../../../scripts/dom';
    import Vue from 'vue';
    import AmCollapseTransition from '../../am-collapse/am-collapse-transition';

    export default {
        name: 'am-table-column-collapse-item',
        components: {AmCollapseTransition, AmRadio},
        mixins: [
            tableEditItemMixin
        ],
        props: {
            activeIcon: {},
            inactiveIcon: {},

            scopeSlotFunc: {type: Function},
            renderFunc: {type: Function},
        },
        data() {
            return {
                show: false,
                table: null,
                rowSides: ['left', 'center', 'right'],
                rows: [],
                instances: [],
            };
        },
        watch: {
            currentValue(val) {
                !!val && !this.show && this.open();
                !val && (this.show = false);
            },
        },
        methods: {
            getTable() {
                if (!this.table) {
                    this.table = findComponentUpward(this, 'am-table');
                    this.rowSides.forEach((item) => {
                        if (!!this.table.$refs[item]) {
                            this.rows.push(findComponentsDownward(this.table.$refs[item], 'am-table-row')[this.rowIndex].$el);
                        }
                    });
                }
                return this.table;
            },
            getInstance() {
                const vueComponent = new Vue({
                    props: {parent: {default: () => this}},
                    components: {AmCollapseTransition},
                    render(h) {
                        return (<tr>
                            <td colSpan={this.parent.table.renderColumns.length}>
                                <am-collapse-transition onAfterLeave={this.handleTransitionEnd}>
                                    <div v-show={this.parent.show}>
                                        {!!this.parent.scopeSlotFunc && this.parent.scopeSlotFunc({row: this.parent.row, rowIndex: this.parent.rowIndex})}
                                    </div>
                                </am-collapse-transition>
                            </td>
                        </tr>);
                    },
                    methods: {
                        handleTransitionEnd() {
                            this.$el.parentNode.removeChild(this.$el);
                            this.$destroy();
                        },
                    },
                });
                return vueComponent.$mount();
            },
            open() {
                this.getTable();
                this.rows.forEach((row) => {
                    let instance = this.getInstance();
                    insertAfter(instance.$el, row);
                });
                this.$nextTick(() => this.show = true);
            },
        },
    };
</script>
