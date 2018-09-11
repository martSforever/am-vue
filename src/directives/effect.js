import 'src/libs/waves/waves.min.css';
import 'src/libs/waves/waves.min.js';
import {oneOf} from "../script/utils";

console.log(window.Waves)

/*一般情况下，只需要用light、deep以及circle三种效果就可以了，默认是light*/
export default {
    inserted(el, binding, vnode) {
        let classes = binding.arg;
        let allClass = ['light', 'deep', 'float', 'circle', 'button', 'ripple'];
        if (!(oneOf(classes, allClass))) {
            classes = allClass[0];
        }
        Waves.attach(el, `waves-${classes}`);
        Waves.init();
    },
}
