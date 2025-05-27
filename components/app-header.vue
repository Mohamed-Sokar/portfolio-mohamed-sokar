<template>
  <header
    class="sticky top-0 px-3 z-50 w-full border-b border-gray-200 dark:border-gray-600 backdrop-blur-md dark:shadow-gray-600"
  >
    <UICustomContainer class="flex h-16 items-center justify-between">
      <NuxtLink
        href="/"
        class="font-bold text-xl text-secondary transition-colors hover:text-secondary/80"
      >
        Portfolio
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink
          href="#projects"
          class="text-sm font-semibold hover:text-secondary border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          href="#github"
          class="text-sm font-semibold hover:text-secondary border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          GitHub
        </NuxtLink>
        <NuxtLink
          href="#resume"
          class="text-sm font-semibold hover:text-secondary border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          Resume
        </NuxtLink>
        <NuxtLink
          href="#about"
          class="text-sm font-semibold hover:text-secondary border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          About
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-4">
        <ClientOnly v-if="!colorMode?.forced">
          <USwitch
            unchecked-icon="i-lucide-sun"
            checked-icon="i-lucide-moon"
            :default-value="isDark"
            color="secondary"
            size="xl"
            @click="isDark = !isDark"
          />
        </ClientOnly>
        <NuxtLink to="mailto:aboomarsokar@gmail.com">
          <UButton
            icon="heroicons-envelope"
            size="md"
            color="secondary"
            variant="solid"
            >Contact</UButton
          >
        </NuxtLink>
      </div>
    </UICustomContainer>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    console.log(colorMode.preference);
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

// to show header shadow when scroll
const header = ref<HTMLElement | null>(null);
onMounted(() => {
  header.value = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (header.value) {
      if (window.scrollY > 0) {
        header.value.classList.add("shadow-lg");
      } else {
        header.value.classList.remove("shadow-lg");
      }
    }
  });
});
</script>

<style scoped></style>
