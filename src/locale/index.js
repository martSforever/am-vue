import defaultLang from './lang/zh-CN'

const $ami18n = {
    locale: defaultLang,
    setLocale(locale) {
        $ami18n.locale = locale
    },
}

export default {
    install(vue) {
        Object.defineProperty(vue.prototype, '$ami18n', {
            writable: false,
            enumerable: false,
            configurable: true,
            value: $ami18n
        })
        vue.mixin({
            data() {
                return {
                    $ami18n: $ami18n
                }
            },
            computed: {
                $amlocale() {
                    return $ami18n.locale
                },
            },
        })
    },
}
