<template>
  <section class="pt-20 mb-20" id="projects">
    <UICustomContainer>
      <h2 class="font-bold text-3xl sm:text-5xl text-secondary mb-3">
        Projects
      </h2>
      <p class="text-gray-600 dark:text-gray-400 sm:text-xl">
        Check out some of my recent web development projects.
      </p>
      <ProjectsFilter class="mt-10" @filter="filterProjects" />
      <TransitionGroup
        name="fade"
        tag="div"
        class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        enter-active-class="transition duration-500 ease-in-out"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-500 ease-in-out"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2"
      >
        <!-- Start Card -->
        <Card
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
        <!-- End Card -->
      </TransitionGroup>
    </UICustomContainer>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/constants";

const projectFlag = ref("all");

const filteredProjects = computed(() => {
  if (projectFlag.value === "all") {
    return projects;
  }
  return projects.filter((project) => project.type === projectFlag.value);
});

const filterProjects = (name: string) => {
  projectFlag.value = name;
};
</script>

<style scoped></style>
