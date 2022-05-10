import { createI18n } from 'vue-i18n'
import { en } from '@/../locales'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
  },
})

export default i18n
