import './styles/index.scss';

import icon from './components/am-icon';
import button from './components/am-button';
import buttonGroup from './components/am-button/am-button-group';

const components = {
    icon,
    button,
    'button-group': buttonGroup,
};

let $amvue = {};

const defaultInstallOptions = {
    ComponentPrefix: 'am',                          //组件使用前缀，比如这里是am，则在使用图标组件的时候就是<am-icon/>
    IconfontPrefix: null,                           //阿里巴巴iconfont图标使用前缀
};

function install(vue, options) {

    /*@formatter:off*/
    $amvue.$options = Object.assign({},defaultInstallOptions , options);
    Object.defineProperty(vue.prototype, '$amvue', {writable: false, enumerable: false, configurable: true, value: $amvue})
    Object.keys(components).forEach((key) => vue.component(`${$amvue.$options.ComponentPrefix}-${key}`, components[key]))
    /*@formatter:on*/
}

module.exports.default = module.exports = {
    install,
};
