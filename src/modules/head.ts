import { createHead } from '@vueuse/head'
import type { UserModule } from '@/types'
import type { Module } from '@/modules/types'

/**
 * @param Module
 * @see https://github.com/vueuse/head
 */
export const install: UserModule = ({ app }: Module) => {
  const head = createHead()
  app.use(head)
}
