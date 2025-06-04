<script setup lang="ts">
import { type projectType } from "~/types";
import { useIntersectionObserver } from "@vueuse/core";
const props = defineProps<{
  project: projectType;
}>();

const cardRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(cardRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true;
});
</script>

<template>
  <a
    :href="props.project.projectUrl"
    target="_blank"
    ref="cardRef"
    :class="[
      'transition-all duration-500 ease-in-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15',
    ]"
  >
    <UICustomCard class="relative pb-10 w-full h-full" shadow translate-y>
      <div class="w-full h-70 rounded-md">
        <img
          class="w-full h-full object-cover overflow-hidden rounded-tl-md rounded-tr-md border-b border-gray-300 dark:border-gray-600"
          :src="props.project.imageUrl"
          alt="my picture"
        />
      </div>
      <div class="p-3">
        <h3 class="text-xl font-bold my-2">{{ props.project.title }}</h3>
        <p class="text-muted mb-5 text-sm font-semibold">
          {{ props.project.description }}
        </p>
        <div class="flex flex-wrap gap-1 absolute bottom-4 left-3">
          <UBadge
            v-for="tech in props.project.techniechs"
            :label="tech"
            color="secondary"
            variant="solid"
            size="md"
            class="rounded-full font-bold"
          />
        </div>
      </div>
    </UICustomCard>
  </a>
</template>

<style scoped></style>
