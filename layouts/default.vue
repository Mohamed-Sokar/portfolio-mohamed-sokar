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
  titleTemplate: "%s - Mohammad Sokar",
  link: [
    {
      rel: "preconnect",
      href: "https:fonts.googlepis.com",
    },
    {
      rel: "stylesheet",
      // href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap",
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
  font-family: "Roboto";

  /*@apply dark:bg-gray-900 bg-white;*/
}
</style>
