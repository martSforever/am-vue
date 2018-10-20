import './styles/index.scss';
import AmVueDomPortal from './directives/vue-dom-portal';
import AmI18n from './locale';

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
import collapse from './components/am-collapse/am-collapse';
import collapseGroup from './components/am-collapse/am-collapse-group';
import notice from './components/am-notice';
import tag from './components/am-tag-input/am-tag';
import tagInput from './components/am-tag-input/am-tag-input';
import swiper from './components/am-swiper/am-swiper';
import swiperItem from './components/am-swiper/am-swiper-item';
import tabbar from './components/am-tabbar/am-tabbar';
import tab from './components/am-tabbar/am-tab';
import tree from './components/am-tree';
import scrollbar from './components/am-scrollbar';
import popover from './components/am-popover';
import dropdown from './components/am-dropdown';
import dropdownItem from './components/am-dropdown/am-dropdown-item';
import select from './components/am-select';
import timepicker from './components/am-timepicker';
import datepicker from './components/am-datepicker';
import table from './components/am-table';
import tableColumn from './components/am-table/am-table-column';
import tableColumnIndex from './components/am-table-expansion/am-table-column-index';
import tableColumnInput from './components/am-table-expansion/am-table-column-input/am-table-column-input';
import tableColumnCheck from './components/am-table-expansion/am-table-column-check/am-table-column-check';
import tableColumnCollapse from './components/am-table-expansion/am-table-column-collapse/am-table-column-collapse';
import tableColumnDatepicker from './components/am-table-expansion/am-table-column-datepicker/am-table-column-datepicker'
import autoTable from './components/am-auto-table/am-auto-table'
import autoTableFilter from './components/am-auto-table/am-auto-table-filter'
import autoTableFilterInput from './components/am-auto-table/am-auto-table-filter-input'
import pagination from './components/am-pagination/am-pagination'

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
    collapse,
    'collapse-group': collapseGroup,
    tag,
    'tag-input': tagInput,
    swiper,
    'swiper-item': swiperItem,
    tabbar,
    tab,
    tree,
    scrollbar,
    popover,
    dropdown,
    'dropdown-item': dropdownItem,
    select,
    timepicker,
    datepicker,
    table,
    'table-column': tableColumn,
    'table-column-index': tableColumnIndex,
    'table-column-input': tableColumnInput,
    'table-column-check': tableColumnCheck,
    'table-column-collapse': tableColumnCollapse,
    'table-column-datepicker': tableColumnDatepicker,
    'auto-table': autoTable,
    'auto-table-filter': autoTableFilter,
    'auto-table-filter-input': autoTableFilterInput,
    pagination,
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
    vue.use(AmI18n);
    vue.prototype.$modal = modal;
    vue.prototype.$notice = notice;

}

window.Amvue = {
    install,
};

module.exports.default = module.exports = window.Amvue;
