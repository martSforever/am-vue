<template>
    <span class="am-lov">{{label}}</span>
</template>

<script>
    import {getModuleStore} from '../store';

    const lovStore = getModuleStore('lov');

    export default {
        name: 'am-lov',
        props: {
            code: {required: true},
            type: {required: true},
        },
        computed: {
            ...lovStore.mapGetters(['lovData']),
            label() {
                const rets = this.lovData.filter(lov => (lov.code === this.code && lov.type === this.type));
                return rets.length > 0 ? rets[0].label : null;
            }
        },

    };
</script>
