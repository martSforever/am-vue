import {deepCopy} from '../../scripts/utils';
import http from '../../../examples/scripts/http';
import AutoTableController from './index';

const DEFAULT_QUERY_PARAM = {
    page: 1,
    pageSize: 10,
    orders: [{field: 'createdAt', desc: true}],
    filters: [],
};

export class AutoOption {

    url;
    countUrl;
    insertUrl;
    multiInserUrl;
    updateUrl;
    multiUpdateUrl;
    deleteUrl;

    param;
    loadOnStart = true;

    tableId;
    parentId;

    list = [];
    noMore = false;
    count = 0;

    constructor(option) {
        option = option || {};
        Object.assign(this, option);
        this.param = Object.assign({}, {query: deepCopy(DEFAULT_QUERY_PARAM)}, option.param);
        console.log('this', this)
        if (!!this.loadOnStart && !!this.url) {
            this.reload();
        }
    }

    async reload() {
        this.param.query.page = 1;
        this.count = await this.queryCount();
        return this.load();
    }

    async load() {
        this.list.splice(0, this.list.length);
        const data = await http.post(this.url, this.param);
        if (!data.ret || data.ret.length < this.param.pageSize) this.noMore = true;
        if (!!data.ret) data.ret.forEach(item => this.list.push(item));
        return data;
    }

    reloadChildren() {
        const tableChildren = AutoTableController.getChildren(this);
        tableChildren.forEach(table => table.option.reload());
    }

    async queryCount() {
        const data = await http.post(this.countUrl, this.param);
        return data.ret;
    }

    async insert(row, done) {
        const data = await http.post(this.insertUrl, row);
        done();
        return {data: data.ret, done};
    }

    async multiInsert(row, done) {
        const data = await http.post(this.multiInserUrl, row);
        done();
        return {data: data.ret, done};
    }

    async update(row, done) {
        const data = await http.post(this.updateUrl, row);
        done();
        return {data: data.ret, done};
    }

    async multiUpdate(row, done) {
        const data = await http.post(this.multiUpdateUrl, row);
        done();
        return {data: data.ret, done};
    }

    async delete(row, done) {
        const data = await http.post(this.deleteUrl, row);
        done();
        return {data: data.ret, done};
    }

}
