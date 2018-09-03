import icon from 'src/components/icon';

const components = {
    icon,
};

let $amvue = {};

function install(vue, options) {
    /*@formatter:off*/
    $amvue.$options = Object.assign({}, {ComponentPrefix: 'am',}, options);
    Object.defineProperty(vue.prototype, '$amvue', {writable: false, enumerable: false, configurable: true, value: $amvue})
    Object.keys(components).forEach((key) => vue.component(`${$amvue.$options.ComponentPrefix}-${key}`, icon))
    /*@formatter:on*/
}

export default {
    install,
};
