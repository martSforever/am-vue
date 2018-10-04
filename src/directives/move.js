import {removePx} from "../scripts/utils";

class Mouse {
  constructor() {
    this.initialized = false
    this.startX = 0
    this.startY = 0
  }
}

export default {
  bind(el, binding, vnode) {
    let mouse = new Mouse()
    el.style.position = el.style.position || 'relative'
    el._handleMouseDown_ = (e) => {
      mouse.initialized = true
      mouse.startX = e.clientX
      mouse.startY = e.clientY
      mouse.startLeft = (!!el.style.left ? removePx(el.style.left) : 0)
      mouse.startTop = (!!el.style.top ? removePx(el.style.top) : 0)
    }
    el._handleMouseMove_ = (e) => {
      if (!mouse.initialized) return
      let deltaX = e.clientX - mouse.startX
      let deltaY = e.clientY - mouse.startY
      el.style.left = (deltaX + mouse.startLeft) + 'px'
      el.style.top = (deltaY + mouse.startTop) + 'px'
      if (binding.expression) {
        binding.value(e);
      }
    }
    el._handleMouseUp_ = (e) => {
      mouse.initialized = false
    }
    el.addEventListener('mousedown', el._handleMouseDown_)
    document.addEventListener('mousemove', el._handleMouseMove_)
    document.addEventListener('mouseup', el._handleMouseUp_)
  },
  unbind(el, binding) {
    el.removeEventListener('mousedown', el._handleMouseDown_)
    document.removeEventListener('mousemove', el._handleMouseMove_)
    document.removeEventListener('mouseup', el._handleMouseUp_)
  },
}
