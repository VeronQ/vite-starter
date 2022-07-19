<script setup lang="ts">
import type { Component, ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { LayoutDefault, LayoutFullPage } from '@/layouts'
import { LAYOUTS } from '@/layouts/types'
import { useProgressBar } from '@/composables'

const route = useRoute()

const { start, done } = useProgressBar()

const layout: ComputedRef<Component> = computed(() => {
  switch (route.meta?.layout) {
    case LAYOUTS.FULL_PAGE:
      return LayoutFullPage
  }

  return LayoutDefault
})
</script>

<template>
  <component :is="layout">
    <RouterView v-slot="{ Component: Comp }">
      <template v-if="Comp">
        <Transition mode="out-in">
          <Suspense @pending="start"
                    @resolve="done"
          >
            <component :is="Comp" />
            <template #fallback>
              Loading...
            </template>
          </Suspense>
        </Transition>
      </template>
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
