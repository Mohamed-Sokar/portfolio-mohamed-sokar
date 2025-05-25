<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <AppHeader />
    <main class="">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({});
const colorMode = useColorMode();
colorMode.preference = "system";
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Inter";
  /*@apply dark:bg-gray-900 bg-white;*/
}
</style>
