import { createApp } from 'vue'

import router from './router'
import i18n from './i18n'

import App from '@/App.vue'
import '@/css/main.css'

(async () => {
  const app = createApp(App)

  app.use(i18n)
  app.use(router)

  await router.isReady()

  app.mount('#app')
})()
