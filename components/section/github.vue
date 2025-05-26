<template>
  <section
    class="mb-20 px-3 sm:px-0 py-20 bg-secondary-50 dark:bg-secondary-950"
    id="github"
  >
    <UICustomContainer>
      <h2 class="font-bold text-3xl sm:text-5xl text-secondary mb-3">
        GitHub Repositories
      </h2>
      <p class="text-gray-600 dark:text-gray-400 sm:text-xl">
        Explore my open-source contributions and personal projects.
      </p>

      <UICustomCard class="mt-8 p-5 shadow-sm dark:bg-black" translate-y shadow>
        <div class="flex justify-between items-center">
          <div class="font-bold">my-projects</div>
          <div>
            <UIcon name="fa6-brands-github-alt" />
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-muted">{{ reposLength ?? 15 }} projects</div>

          <div>
            <a
              target="_blank"
              href="https://github.com/Mohamed-Sokar?tab=repositories"
              class="flex items-center gap-1 text-blue-600 hover:underline text-sm transition-all"
            >
              View
              <UIcon
                name="heroicons-arrow-top-right-on-square-solid"
                size="sm"
              />
            </a>
          </div>
        </div>
        <div
          class="flex items-center justify-start gap-1 mt-4 mb-1 text-secondary-600 font-semibold"
        >
          <div>Scroll down</div>
          <UIcon name="heroicons-arrow-down-20-solid" />
        </div>

        <div class="grid gap-3 h-80 scroll-auto overflow-scroll">
          <UICustomCard
            v-for="repo in repos"
            :key="repo.id"
            class="p-2 font-bold"
            translate-y
          >
            <div class="flex items-center justify-between">
              <div>
                {{ repo.name }}
              </div>
              <a :href="repo.html_url" target="_blank">
                <UIcon
                  name="heroicons-arrow-top-right-on-square-solid"
                  size="xs"
                  class="text-blue-600 font-bold"
                />
              </a>
            </div>
          </UICustomCard>
        </div>
      </UICustomCard>
    </UICustomContainer>
  </section>
</template>

<script setup lang="ts">
const repos = ref();
const fetchRepos = async () => {
  const { data } = await useFetch(
    "https://api.github.com/users/Mohamed-Sokar/repos"
  );
  console.log(data.value);
  repos.value = data.value;
};
await fetchRepos();
// repos.value = await fetchRepos();
const reposLength = computed(() => repos.value.length);
</script>

<style scoped></style>
