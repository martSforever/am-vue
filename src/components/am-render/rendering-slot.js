export default {
    name: 'rendering-slot',
    props: {
        slots: {
            type: Array,
            required: true
        },
    },
    render(h) {
        return h('div', {
            class: 'am-rendering-slot',
        }, [
            ...this.slots
        ])
    },
}
