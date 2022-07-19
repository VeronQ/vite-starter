import { createApp } from 'vue'

import router from '@/router'

import App from '@/App.vue'
import '@/css/main.css'

(async () => {
  const app = createApp(App)

  Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.({ app, router }))

  app.use(router)
  await router.isReady()

  app.mount('#app')
})()
