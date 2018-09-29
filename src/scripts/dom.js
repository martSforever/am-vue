


/*
*  向下查找组件
*/
export function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

/*
*  向上查找组件
*/
export function findComponentsUpward(context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

/*
*  向上查找一个组件
*/
export function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


import {camelCase, oneOf} from "./utils";

/*
* 将光标移动到末尾
*/
export function moveCursorToEnd(obj) {
    if (window.getSelection) {//ie11 10 9 ff safari
        obj.focus(); //解决ff不获取焦点无法定位问题
        let range = window.getSelection();//创建range
        range.selectAllChildren(obj);//range 选择obj下所有子内容
        range.collapseToEnd();//光标移至最后
    }
    else if (document.selection) {//ie10 9 8 7 6 5
        let range = document.selection.createRange();//创建选择对象
        //let range = document.body.createTextRange();
        range.moveToElementText(obj);//range定位到obj
        range.collapse(false);//光标移至最后
        range.select();
    }
}

/*----------------------------------------------------------------------------------*/

/*
* 监听粘贴事件
*/
export function onPasteImage(obj, handler) {
    obj.addEventListener('paste', function (event) {
        // 添加到事件对象中的访问系统剪贴板的接口
        let clipboardData = event.clipboardData;
        let i = 0, items, item, types;

        if (clipboardData) {
            items = clipboardData.headItems;
            if (!items) return;
            item = items[0];
            // 保存在剪贴板中的数据类型
            types = clipboardData.types || [];
            for (; i < types.length; i++) {
                if (types[i] === 'Files') {
                    item = items[i];
                    break;
                }
            }
            // 判断是否为图片数据
            if (item && item.kind === 'file' && item.type.match(/^image\//i)) {
                // 读取该图片
                imgReader(item, handler);
            }
        }
    });
}

/*----------------------------------------------------------------------------------*/

/*
* 读取图片
*/
function imgReader(target, handler) {
    let file = target.getAsFile(),
        reader = new FileReader();
    reader.onload = function (e) {
        handler(e.target.result)
    };
    reader.readAsDataURL(file);
}

/*----------------------------------------------------------------------------------*/

/*
* 是否包含某种样式class
*/
export function hasClass(cls, clsList) {
    return oneOf(cls, clsList.value.split(' '));
}

/* istanbul ignore next */
export function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/*----------------------------------------------------------------------------------*/
/*检测浏览器使用的是哪一种前缀*/
let elementStyle = document.createElement('div').style;

function caculateVender() {
    let transformNames = {
        wehkit: 'wehkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key;
        }
    }
    return false;
}

let vender = caculateVender();

/*获取浏览器css兼容性前缀*/
export function prefixStyle(style) {
    if (vender === false) {
        return false;
    }
    if (vender === 'standard') {
        return style;
    }
    return vender + style.charAt(0).toUpperCase() + style.substr(1);
}


// getStyle
export function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
}

/*
*  在元素节点后面添加新的节点
*/
export function insertAfter(newEl, targetEl) {
    let parentEl = targetEl.parentNode;
    if (parentEl.lastChild === targetEl) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后
        parentEl.appendChild(newEl);
    } else {
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        parentEl.insertBefore(newEl, targetEl.nextSibling);
    }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}
