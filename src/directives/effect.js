import '../libs/waves/waves.min.css';
import '../libs/waves/waves.min.js';
import {oneOf} from '../scripts/utils';

/*一般情况下，只需要用light、deep以及circle三种效果就可以了，默认是light*/
export default {
    inserted(el, binding, vnode) {
        let classes = binding.value;
        if (classes === false) return;
        let allClass = ['deep', 'light', 'float', 'circle', 'button', 'ripple'];
        if (!(oneOf(classes, allClass))) {
            classes = allClass[0];
        }
        Waves.attach(el, `waves-${classes}`);
        Waves.init();
    },
};
