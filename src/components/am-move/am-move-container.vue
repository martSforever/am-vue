<template>
    <transition-group :name="transitionName" tag="div" class="am-move-container">
        <slot></slot>
    </transition-group>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-move-container',
        props: {
            direction: {
                type: String,
                default: 'bottom-right',
                desc: 'item入场出场动画的方向',
                validator(val) {
                    return oneOf(val, [
                        'left',
                        'right',
                        'top',
                        'bottom',
                        'left-top',
                        'top-left',
                        'right-top',
                        'top-right',
                        'left-bottom',
                        'bottom-left',
                        'right-bottom',
                        'bottom-right',
                    ]);
                },
            }
        },
        computed: {
            transitionName() {
                return `am-move-container-${this.direction}`;
            },
        }
    };
</script>
