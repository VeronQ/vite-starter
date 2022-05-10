<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-black dark:bg-gray-900 dark:text-gray-100">
    <div class="bg-blue-200 p-2 text-center">
      Full Page Layout
    </div>
    <div class="flex-1 flex flex-col items-center justify-center p-8">
      <slot />
    </div>
  </div>
</template>
