<template>
  <section
    id="about"
    class="px-3 sm:px-0 py-20 bg-secondary-50 dark:bg-secondary-950"
  >
    <UICustomContainer>
      <h2 class="font-bold text-3xl sm:text-5xl text-secondary mb-3">
        About Me
      </h2>
      <p class="text-gray-600 dark:text-gray-400 sm:text-xl mb-10">
        Get to know me better
      </p>
      <div class="flex flex-col gap-4 font-semibold mb-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="flex justify-center lg:justify-start items-center col-span-1 md:col-span-3 lg:col-span-1"
          >
            <img
              src="/public/images/my-photo.JPG"
              class="h-110 w-auto rounded-full"
              alt="my photo"
            />
          </div>

          <div class="flex flex-col md:col-span-3 lg:col-span-2 gap-5">
            <div class="text-secondary text-3xl font-bold mb-5">
              Hello, I'm Mohammad Sokar
            </div>
            <p>
              I'm a <span class="text-warning"> junior </span> developer with a
              passion for creating web applications. My journey in web
              development began during my studies, and I've been dedicated to
              improving my skills ever since.
            </p>

            <p>
              I'm currently focusing on frontend development with
              <span class="text-warning"> Vue.js </span> and
              <span class="text-warning"> Nuxt.js </span> , while also building
              my knowledge of backend technologies. I believe in writing clean,
              readable code and creating user-friendly interfaces.
            </p>

            <p>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and expanding my knowledge
              through online courses and tutorials. I'm eager to grow as a
              developer and take on new challenges.
            </p>

            <div>
              <h4 class="text-2xl text-secondary font-bold mb-5">
                My Development Philosophy
              </h4>
              <div class="flex flex-col gap-1.5">
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  User-centered design comes first
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Performance and accessibility are non-negotiable
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Clean code is as important as working code
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Continuous learning and improvement
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UICustomContainer>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
