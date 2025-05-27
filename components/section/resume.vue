<template>
  <section id="resume" class="py-20">
    <UICustomContainer>
      <h2 class="font-bold text-3xl sm:text-5xl text-secondary mb-3">Resume</h2>
      <p class="text-gray-600 dark:text-gray-400 sm:text-xl mb-10">
        My professional experience and skills.
      </p>
      <div class="flex flex-col gap-5">
        <!-- Start Professional Experience -->
        <article>
          <h3 class="font-bold text-secondary text-2xl mb-4">
            Professional Experience
          </h3>
          <UICustomCard class="p-5" shadow translate-y>
            <div class="flex justify-between items-center mb-5">
              <div class="flex flex-col">
                <h4 class="text-secondary font-bold text-lg sm:text-2xl">
                  Junior Web Developer
                </h4>
                <span class="text-muted -mt-1.5 text-sm sm:text-base"
                  >Iphone Alsham</span
                >
              </div>
              <div class="text-xs sm:text-sm text-muted font-semibold">
                2022 - 2023
              </div>
            </div>
            <div class="flex flex-col gap-2 text-sm sm:text-base">
              <li
                class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
              >
                Developing website components using
                <span class="text-warning font-bold"> HTML </span> ,
                <span class="text-warning font-bold"> CSS </span> , and
                <span class="text-warning font-bold"> JavaScript </span> .
              </li>
              <li
                class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
              >
                Learned modern web development workflows and version control
                with
                <span class="text-warning font-bold"> Git </span>.
              </li>
              <li
                class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
              >
                Implement
                <span class="text-warning font-bold"> responsive </span>
                websites.
              </li>

              <li
                class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
              >
                Participated in
                <span class="text-warning font-bold"> team </span>
                development.
              </li>
              <li
                class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
              >
                Developed and maintained responsive web applications using
                <span class="text-warning font-bold"> Vue.js </span> and
                <span class="text-warning font-bold"> Nuxt.js </span>
              </li>
              <li
                class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
              >
                Worked with
                <span class="text-warning font-bold"> REST APIs </span>
                and integrated third-party services.
              </li>
            </div>
          </UICustomCard>
        </article>
        <!-- End Professional Experience -->

        <div
          class="border-b border-b-gray-300 dark:border-b-gray-500 my-10"
        ></div>

        <!-- Start Education -->
        <article>
          <h3 class="font-bold text-secondary text-2xl mb-4">Education</h3>
          <UICustomCard class="p-5" shadow translate-y>
            <div class="flex justify-between items-center mb-5">
              <div class="flex flex-col">
                <h4 class="text-lg sm:text-2xl text-secondary font-bold">
                  Bachelor of Science in Computer Science
                </h4>
                <span class="text-muted -mt-1.5">Islamic University Gaza</span>
              </div>
              <div class="text-xs sm:text-sm text-muted font-semibold">
                2019 - 2023
              </div>
            </div>

            <div
              class="hover:text-secondary hover:translate-x-1 transition-all font-semibold text-sm sm:text-base"
            >
              Graduated with
              <span class="font-bold text-lg text-warning"> Excellent</span>
              grade and
              <span class="font-bold text-lg text-warning"> Honors</span>.
              Specialized in software development.
            </div>
          </UICustomCard>
        </article>
        <!-- End Education -->

        <div
          class="border-b border-b-gray-300 dark:border-b-gray-500 my-10"
        ></div>

        <!-- Start Skills -->
        <article>
          <h3 class="font-bold text-secondary text-2xl mb-5">Skills</h3>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
            <UICustomCard class="p-5" shadow translate-y>
              <h4 class="text-2xl text-secondary font-bold mb-5">Frontend</h4>
              <div class="flex flex-col gap-1.5">
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  HTML5 / CSS3
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  JavaScript / Basic TypeScript
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Vue.js / Nuxt.js
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Tailwind Css
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Bootstrap
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Responsive Design
                </li>
              </div>
            </UICustomCard>
            <UICustomCard class="p-5" shadow translate-y>
              <h4 class="text-2xl text-secondary font-bold mb-5">
                Tools & Others
              </h4>
              <div class="flex flex-col gap-1.5">
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Git / GitHub
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  VS Code
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  npm / yarn
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Vercel / Netlify
                </li>
              </div>
            </UICustomCard>
            <UICustomCard class="p-5" shadow translate-y>
              <h4 class="text-2xl text-secondary font-bold mb-5">
                Soft Skills
              </h4>
              <div class="flex flex-col gap-1.5">
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Problem Solving
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Team Collaboration
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Communication
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Time Management
                </li>
                <li
                  class="hover:text-secondary hover:translate-x-1 transition-all font-semibold"
                >
                  Continuous Learning
                </li>
              </div>
            </UICustomCard>
          </div>
        </article>
        <!-- End Skills -->
      </div>
    </UICustomContainer>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
