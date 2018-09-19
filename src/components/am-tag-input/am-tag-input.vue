<template>
    <am-move-container class="am-tag-input" direction="bottom">
        <am-tag
            v-for="(tag,index) in tags"
            :label="tag.label"
            :value="tag.value"
            :color="tag.color"
            :deleteable="tag.deleteable"
            :type="tag.type"
            :shape="tag.shape"
            :dashed="tag.dashed"
            :renderFunc="tag.renderFunc"
            :key="tag._tagKey"
            :index="index"
            @remove="_handleRemove"
        />
    </am-move-container>
</template>

<script>
    import AmTag from './am-tag';
    import AmMoveContainer from '../am-move/am-move-container';
    import Vue from 'vue';
    import {uuid} from '../../scripts/utils';

    export default {
        name: 'am-tag-input',
        components: {
            AmTag,
            AmMoveContainer
        },
        props: {
            tags: {type: Array, default: () => []}
        },
        watch: {
            tags: {
                immediate: true,
                handler(val) {
                    if (!!val) {
                        val.forEach((item, index) => {
                            if (!item._tagKey) {
                                Vue.set(item, '_tagKey', uuid(10, index));
                            }
                        });
                    }
                },
            },
        },
        methods: {
            _handleRemove(index) {
                this.tags.splice(index, 1);
            },
        },
    };
</script>
