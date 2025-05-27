<template>
  <footer class="py-6 border-t border-t-gray-200 dark:border-t-gray-500">
    <UICustomContainer>
      <div class="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div class="text-muted text-sm">
          &copy; 2025 Mohammad Sokar. All rights reserved.
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink
            href="https://github.com/Mohamed-Sokar?tab=repositories"
            target="_blank"
            class="hover:text-secondary"
          >
            <UIcon name="fa6-brands-github-alt" class="size-5" />
          </NuxtLink>
          <NuxtLink
            href="mailto:aboomarsokar@gmail.com"
            class="hover:text-secondary"
          >
            <UIcon name="heroicons-envelope" class="size-5" />
          </NuxtLink>
        </div>
      </div>
    </UICustomContainer>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
