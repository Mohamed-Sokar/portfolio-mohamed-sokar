<script setup lang="ts">
const emit = defineEmits<{
  (e: "filter", name: string): void;
}>();

const isActive = ref("all");

const clickHandler = (name: string) => {
  if (name === "all") {
    isActive.value = "all";
    emit("filter", "all");
  } else if (name === "frontend") {
    isActive.value = "frontend";
    emit("filter", "frontend");
  } else if (name === "fullstack") {
    isActive.value = "fullstack";
    emit("filter", "fullstack");
  }
};
</script>

<template>
  <div class="mt-10 flex gap-4">
    <UButton
      class="rounded-full text-sm sm:text-lg"
      color="secondary"
      :variant="isActive === 'all' ? 'solid' : 'outline'"
      @click="clickHandler('all')"
      >All</UButton
    >
    <UButton
      class="rounded-full text-sm sm:text-lg"
      color="secondary"
      :variant="isActive === 'frontend' ? 'solid' : 'outline'"
      @click="clickHandler('frontend')"
      >Frontend</UButton
    >
    <UButton
      class="rounded-full text-sm sm:text-lg"
      color="secondary"
      :variant="isActive === 'fullstack' ? 'solid' : 'outline'"
      @click="clickHandler('fullstack')"
      >Full Stack</UButton
    >
  </div>
</template>

<style scoped></style>
