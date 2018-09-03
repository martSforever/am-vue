import './styles/index.less';

import icon from 'src/components/icon';

const components = {
    icon,
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
    Object.keys(components).forEach((key) => vue.component(`${$amvue.$options.ComponentPrefix}-${key}`, icon))
    /*@formatter:on*/
}

export default {
    install,
};
