<template>
  <section class="py-20 bg-secondary-50 dark:bg-secondary-950">
    <UICustomContainer class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="flex justify-center items-center">
        <img
          src="~/public/images/my-photo2.png"
          alt="My photo"
          class="h-100 md:h-80 lg:h-100 xl:h-140 w-auto rounded-full object-contain"
        />
      </div>
      <div class="md:col-span-2 flex flex-col justify-center items-center">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm
            <span class="text-secondary ms-2"> Mohammad Sokar </span>
          </h1>
          <p
            class="text-center max-w-[700px] text-sm sm:text-lg text-gray-600 dark:text-gray-400 md:text-xl mt-2 px-3"
          >
            I'm a junior developer passionate about building web applications.
            I'm constantly learning and improving my skills to create better
            digital experiences.
          </p>
        </div>
        <div class="flex justify-center items-center mt-8 gap-4 flex-wrap">
          <NuxtLink to="/projects">
            <UButton
              class="font-bold"
              trailing-icon="fa6-solid-arrow-right"
              size="lg"
              color="secondary"
              variant="solid"
              >View my work</UButton
            >
          </NuxtLink>
          <NuxtLink href="/github">
            <UButton
              color="neutral"
              icon="fa6-brands-github-alt"
              variant="outline"
              size="lg"
              >GitHub</UButton
            >
          </NuxtLink>
        </div>
      </div>
    </UICustomContainer>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Main",
  description: "",
});
</script>

<style scoped></style>
