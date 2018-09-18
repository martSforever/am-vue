import NoticeContainer from './am-notice-container';

const containers = {};

const defaultOptions = {
    vertical: 'end',
    horizontal: 'end',
    type: 'primary',
    message: 'this is notice message'
};

export default {
    show(options) {
        let o = Object.assign({}, defaultOptions, options);
        let container = containers[`${o.horizontal}-${o.vertical}`];
        if (!container) {
            container = NoticeContainer.newInstance({horizontal: o.horizontal, vertical: o.vertical});
            console.log(container.horizontal,container.vertical)
            containers[`${o.horizontal}-${o.vertical}`] = container;
        }
        return container.addNotice(o);
    },
};
