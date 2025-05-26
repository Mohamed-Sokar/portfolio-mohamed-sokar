<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-600 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
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
            :default-value="false"
            color="secondary"
            size="xl"
            @click="isDark = !isDark"
            class="hover:cursor-pointer"
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
</script>

<style scoped></style>
