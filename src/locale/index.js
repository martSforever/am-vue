import VueI18n from 'vue-i18n'
import Vue from 'vue'
import langs from './lang'

Vue.use(VueI18n)

let i18n = new VueI18n({
    locale: 'zh-CN',
    messages: langs,
})
export default i18n
