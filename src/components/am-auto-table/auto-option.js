import {deepCopy} from "../../scripts/utils";
import http from "../../../examples/scripts/http";

const DEFAULT_QUERY_PARAM = {
    page: 1,
    pageSize: 3,
}

export class AutoOption {

    url;
    countUrl;
    param;
    loadOnStart = true;

    list = [];
    noMore = false;
    count = 0;

    constructor(option) {
        Object.assign(this, option)
        this.param = Object.assign({}, {query: deepCopy(DEFAULT_QUERY_PARAM)}, option.param)

        if (!!this.loadOnStart) {
            this.reload()
        }
    }

    async reload() {
        this.param.query.page = 1
        this.count = await this.queryCount();
        return this.load()
    }

    async loadNext() {
        if (this.noMore) return
        this.param.page++;
        return this.load()
    }

    async load() {
        this.list.splice(0, this.list.length)
        const {data} = await http.post(this.url, this.param)
        if (!data.ret || data.ret.length < this.param.pageSize) this.noMore = true
        if (!!data.ret) data.ret.forEach(item => this.list.push(item))
        return data
    }

    async queryCount() {
        const {data} = await http.post(this.countUrl, this.param)
        return data.ret
    }

}
