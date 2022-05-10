<script setup lang="ts">
import { useProgressBar } from '@/composables'
import { LayoutDefault, LayoutFullPage } from '@/layouts'

const route = useRoute()
const { done, start } = useProgressBar()

const layoutComponent = computed(() => {
  switch (route.meta?.layout) {
    case 'full-page':
      return LayoutFullPage
    default:
      return LayoutDefault
  }
})
</script>

<template>
  <component :is="layoutComponent">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense @pending="start"
                    @resolve="done"
          >
            <component :is="Component" />
            <template #fallback>
              Loading...
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </RouterView>
  </component>
</template>

<style>
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  width: 100%;
  height: 4px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: theme('zIndex.50');
  background: theme('colors.cyan.500');
}
</style>
`
