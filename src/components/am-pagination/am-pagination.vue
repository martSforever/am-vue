<template>
    <div class="am-pagination">
        <am-select :data="sizeOption" :size="size" suffix-icon="fas-angle-down" :width="width" :value="pageSize" shape="none" type="none" :size-equal="true"
                   class="am-pagination-select">
            <span slot="prepend">页大小:</span>
            <template slot-scope="item">
                {{item}}
            </template>
        </am-select>
    </div>
</template>

<script>
    import AmSelect from "../am-select/am-select";

    export default {
        name: "am-pagination",
        components: {AmSelect},
        props: {
            width: {type: Number, default: 30},
            size: {type: String, default: 'small'},

            pageSize: {type: Number, default: 10},
            totalSize: {type: Number,},
            sizeOption: {type: Array, default: () => [10, 15, 20, 50]},
        },
    }
</script>
