<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-600 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <UICustomContainer class="flex h-16 items-center justify-between">
      <NuxtLink
        href="/"
        class="font-bold text-xl text-secondary-600 transition-colors hover:text-secondary-600/80"
      >
        Portfolio
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink
          href="#projects"
          class="text-sm font-semibold hover:text-secondary-600 border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          href="#github"
          class="text-sm font-semibold hover:text-secondary-600 border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          GitHub
        </NuxtLink>
        <NuxtLink
          href="#resume"
          class="text-sm font-semibold hover:text-secondary-600 border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          Resume
        </NuxtLink>
        <NuxtLink
          href="#about"
          class="text-sm font-semibold hover:text-secondary-600 border-b hover:border-b-2 border-b-gray-200 dark:border-gray-600 py-[22.5px] hover:border-secondary transition-colors"
        >
          About
        </NuxtLink>
      </nav>

      <NuxtLink to="mailto:aboomarsokar@gmail.com">
        <UButton
          icon="heroicons-envelope"
          size="md"
          color="secondary"
          variant="solid"
          >Contact</UButton
        >
      </NuxtLink>
    </UICustomContainer>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
