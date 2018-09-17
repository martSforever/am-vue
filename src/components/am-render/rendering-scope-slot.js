export default {
  name: 'rendering-scope-slot',
  props: {
    scopeSlotFunc: {
      type: Function,
      required: true
    },
    data: {
      type: Object,
    },
  },
  render(h) {
    return (
      <div class="rendering-scope-slot">
        {!!this.scopeSlotFunc && this.scopeSlotFunc(this.data)}
      </div>
    )
  },
}
