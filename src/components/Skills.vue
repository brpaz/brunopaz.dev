<template>
<div class="bg-background-secondary">
  <section id="skills" class="container container-lg mx-auto pt-16 pb-16">
    <h2>
      <svg
        aria-hidden="true"
        width="42"
        height="42"
        class="inline mr-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
        />
      </svg>Core Skills
    </h2>

    <div
      class="mt-4 flex mr-16 mx-auto flex-wrap text-center justify-center"
    >
      <div style="width:190px;" v-for="skillGroup in skills" :key="skillGroup.category">
        <h3 class="text-center">{{ skillGroup.category }}</h3>

        <ul class="mb-8">
          <li v-for="(item, index) in skillGroup.items" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import skills from '~/data/skills.yml';
export default {
  name: 'Skills',
  data() {
    return {
      skills
    };
  }
};
</script>
