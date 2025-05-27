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
const color = useColorMode();
color.preference = "system";
useHead({
  titleTemplate: "Portfolio - %s",
  link: [
    {
      rel: "preconnect",
      href: "https:fonts.googlepis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900|Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Poppins", "Roboto Condensed", "Inter", sans-serif;
}
section {
  min-height: calc(100vh - (75.5px + 65px));
}
</style>
