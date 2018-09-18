import NoticeContainer from './am-notice-container';

const containers = {};

const defaultOptions = {
    vertical: 'end',
    horizontal: 'end',
    type: 'primary',
    message: 'this is notice message',
    title: '通知',
    closable: true,
};

export default {
    show(options) {
        let o = Object.assign({}, defaultOptions, options);
        let container = containers[`${o.horizontal}-${o.vertical}`];
        if (!container) {
            container = NoticeContainer.newInstance({horizontal: o.horizontal, vertical: o.vertical});
            containers[`${o.horizontal}-${o.vertical}`] = container;
        }
        return container.addNotice(o);
    },
};
