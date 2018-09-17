import './styles/index.scss';
import AmVueDomPortal from './directives/vue-dom-portal';

import icon from './components/am-icon';
import button from './components/am-button';
import buttonGroup from './components/am-button/am-button-group';
import col from './components/am-grid/am-col';
import row from './components/am-grid/am-row';
import input from './components/am-input';
import AmSwitch from './components/am-switch';
import NumberInput from './components/am-number-input';
import radio from './components/am-radio';
import radioGroup from './components/am-radio-group';
import modal from './components/am-modal';
import segmentLine from './components/am-segment-line';
import avatar from './components/am-avatar';
import moveItem from './components/am-move/am-move-item';
import moveContainer from './components/am-move/am-move-container';

const components = {
    icon,
    button,
    'button-group': buttonGroup,
    col,
    row,
    input,
    switch: AmSwitch,
    'number-input': NumberInput,
    radio,
    'radio-group': radioGroup,
    modal,
    'segment-line': segmentLine,
    avatar,
    'move-item': moveItem,
    'move-container': moveContainer,
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

    vue.use(AmVueDomPortal);
    vue.prototype.$modal = modal;
}

module.exports.default = module.exports = {
    install,
};
