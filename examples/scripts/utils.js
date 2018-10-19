export const storage = {
    // 获取 localStorage
    getItem: function (item) {
        let value;
        if (this.hasLocalSotrage()) {
            try {
                value = localStorage.getItem(item);
            } catch (error) {
                console.error('localStorage.getItem报错， ', error.message)
            } finally {
                return value;
            }
        } else {
            return this.getCookie(item);
        }
    },
    // 设置 localStorage
    setItem: function (key, value, day) {
        if (this.hasLocalSotrage()) {
            try {
                // safari 无痕模式下，直接使用localStorag.setItem 会报错
                localStorage.setItem(key, value);
            } catch (error) {
                console.error('localStorage.setItem报错， ', error.message)
            }
        } else {
            this.setCookie(key, value, day);
        }
    },
    // 判断浏览器是否支持 hasLocalSotrage
    hasLocalSotrage: function () {
        return window.Storage && window.localStorage && window.localStorage instanceof Storage
    },
    //设置cookie
    setCookie: function (key, value, day) {
        let t = day || 30;
        let d = new Date();
        d.setTime(d.getTime() + (t * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + "; " + expires;
    },
    //获取cookie
    getCookie: function (name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return arr[2];
        }
        else {
            return null;
        }
    }
}

export async function delay(duartion) {
    return new Promise((rs) => setTimeout(() => rs(), duartion));
}
