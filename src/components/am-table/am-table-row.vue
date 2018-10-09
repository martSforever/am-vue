<template>
    <tr class="am-table-row" @click="handleClickTrEl" @dblclick="handleDblClickTrEl" :class="classes">
        <td v-for="(col,colIndex) in renderColumns"
            :style="{border:`solid ${borderSize}px ${borderColor}`}"
            :key="colIndex">
            <am-table-cell
                :styles="{width:col.width,padding:`${padding}`,height:`${bodyRowHeight}px`}"
                :data="{row,col,rowIndex,colIndex}"
                :text="row[col.field]"
                :render-fcun="col.colRenderFunc"
                :scope-slot-func="col.colScopedSlot"
                :content-fixed="contentFixed"
                :style="!!cellStyleFunc?cellStyleFunc({row,col,rowIndex,colIndex}):null"
                :fixed="col.fixed"/>
        </td>
    </tr>
</template>

<script>
    import AmTableCell from './am-table-cell';
    import {findComponentUpward} from '../../scripts/dom';

    export default {
        name: 'am-table-row',
        components: {AmTableCell},
        props: {
            renderColumns: {},
            row: {},
            rowIndex: {},
            padding: {},
            bodyRowHeight: {},
            contentFixed: {},
            borderSize: {},
            borderColor: {},
            cellStyleFunc: {type: Function,},
        },
        data() {
            return {
                table: null,
                currentEditable: false
            };
        },
        methods: {
            handleClickTrEl() {
                this.getTable().handleRowClick(this.row, this.rowIndex);
            },
            handleDblClickTrEl() {
                this.getTable().handleRowDblClick(this.row, this.rowIndex);
            },
            getTable() {
                if (!this.table) {
                    this.table = findComponentUpward(this, 'am-table');
                }
                return this.table;
            },
            findEditItems(context) {
                return context.$children.reduce((components, child) => {
                    if (!!child.isTableEditItem) components.push(child);
                    const foundChilds = this.findEditItems(child);
                    return components.concat(foundChilds);
                }, []);
            },
            click() {
                // console.log('click', this.row, this.rowIndex, this.contentFixed);
            },
            dblClick() {
                // console.log('dblClick', this.row, this.rowIndex, this.contentFixed);
            },
            edit() {
                const editItems = this.findEditItems(this);
                editItems.forEach((item) => item.enableEdit());
                this.currentEditable = true;
            },
            cancelEdit() {
                const editItems = this.findEditItems(this);
                editItems.forEach((item) => item.disableEdit());
                this.currentEditable = false;
            },
            saveEdit() {
                const editItems = this.findEditItems(this);
                editItems.forEach((item) => item.save());
            },
        },
        computed: {
            classes() {
                return {
                    'am-table-row-editing': !!this.currentEditable
                };
            },
        },
    };
</script>
