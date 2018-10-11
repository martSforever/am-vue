import Vue from 'vue';

const tableEditItemMixin = {
    props: {
        row: {},
        rowIndex: {},
        col: {},
        colIndex: {},
        field: {},
        editable: {type: Boolean, default: true},

    },
    data() {
        return {
            isTableEditItem: true,                                  //是否为表格编辑组件
            currentValue: !!this.field && this.row[this.field],     //当前编辑双向绑定的值
            currentEditable: false,                                 //当前是否处于编辑状态
        };
    },
    watch: {
        row: {
            handler(newval) {
                /*当row中的属性被改变之后，刷新当前编辑双向绑定的值*/
                if (newval[this.field] !== this.currentValue && !!this.field) this.currentValue = newval[this.field];
            },
            deep: true
        },
        currentEditable(val) {
            /*当取消编辑状态之后，将当前双向绑定的值，重置会row中对象field的值*/
            if (!val && !!this.field) this.currentValue = this.row[this.field];
        },
    },
    mounted() {
        /*如果当前为表头单元格，直接返回*/
        if (JSON.stringify(this.row) === JSON.stringify({})) return;

        /*为了方便列头单元格组件操作该列中所有的组件，在挂载的时候发出事件，将当前组件对象发出*/
        this.$emit('mounted', this);
    },
    beforeDestroy() {
        /*为了方便列头单元格组件操作该列中所有的组件，在卸载的时候发出事件，将当前组件对象发出*/
        this.$emit('beforeDestroy', this);
    },
    methods: {
        enableEdit() {
            this.currentEditable = true;
        },
        disableEdit() {
            this.currentEditable = false;
        },
        save(val) {
            val != null && (this.currentValue = val);
            !!this.field && (Vue.set(this.row, this.field, this.currentValue));
        },
    },
};

export default tableEditItemMixin;
