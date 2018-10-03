import langs from './lang'

const $i18n = {
    langs,
    locale: langs[Object.keys(langs)[0]],
    setLocale(langName) {
        $i18n.locale = langs[langName]
    },
}

export default $i18n
