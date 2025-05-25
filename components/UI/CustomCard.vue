<template>
  <div
    :class="[
      'border border-gray-300 dark:border-gray-600 rounded-md transition-all',
      { 'hover:shadow-md hover:shadow-secondary': props.shadow },
      { 'hover:translate-y-1 ': props.translateY },
      { 'hover:translate-x-1': props.translateX },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shadow?: boolean;
    translateX?: boolean;
    translateY?: boolean;
  }>(),
  {
    shadow: false,
    translateX: false,
    translateY: false,
  }
);
</script>

<style scoped></style>
