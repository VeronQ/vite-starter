import { createPinia } from 'pinia'
import type { UserModule } from '@/types'
import type { Module } from '@/modules/types'

/**
 * @param Module
 * @see https://pinia.vuejs.org/
 */
export const install: UserModule = ({ app }: Module) => {
  const pinia = createPinia()
  app.use(pinia)
}
