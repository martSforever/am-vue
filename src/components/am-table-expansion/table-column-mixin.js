import {oneOf} from '../../scripts/utils';
import {findComponentUpward} from '../../scripts/dom';

const tableColumnMixin = {
    props: {
        field: {},
        title: {type: String, desc: '列标题，当没有titleRenderFunc以及没有$scopedSlots.title时，显示该文本', default: '#'},
        width: {default: '180px', desc: '列宽度'},
        order: {default: 0, desc: '列排序'},
        titleRenderFunc: {type: Function, desc: '自定义列标题渲染函数'},
        colRenderFunc: {type: Function, desc: '自定义列内容渲染函数'},
        editable: {type: Boolean, default: true},
        fixed: {
            type: String, default: 'center', validator(val) {
                return oneOf(val, ['left', 'right', 'center']);
            },
        },
        noSearch: {type: Boolean, default: false},
        sortable: {type: Boolean, default: true},
        filterComponent: {type: String, default: 'am-auto-table-filter-input'},
        filterOption: {},
    },
    watch: {
        order(newval, oldval) {
            if (newval !== oldval) {
                const controller = findComponentUpward(this, 'am-table-column-controller');
                controller.collectHeadColumns();
            }
        },
        width(val) {
            if (this.currentWidth !== val) this.currentWidth = val;
        },
        currentWidth(val) {
            this.$emit('update:width', val);
        },
    },
    data() {
        return {
            isTableColumn: true,
            currentWidth: this.width,
            currentFixed: this.fixed,
        };
    },
    computed: {
        column() {
            return this.$refs.column.column;
        }
    },
};

export default tableColumnMixin;
