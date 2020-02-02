<template>
  <section id="whatido" class="container container-lg mx-auto pt-16 pb-16">
    <h2>
      <svg
        aria-hidden="true"
        focusable="false"
        class="inline mr-4"
        height="42"
        width="42"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
        /></svg
      >What I do?
    </h2>

    <div
      class="mt-4 flex justify-between flex-col lg:flex-row lg:mr-16 flex-shrink-0 pt-8 pb-12"
    >
      <ActivityCard
        title="Web Development"
        image="development.svg"
        description="Web is my passion and I develop entire solutions, from idea to production, using modern technologies."
      />

      <ActivityCard
        title="Quality First"
        image="quality.svg"
        description="I have a strong focus on Code Quality and Engineering best practices like TDD, CI / CD and Automation."
      />

      <ActivityCard
        title="Technical Writing"
        image="systems.svg"
        description='One of the Top 500 contributors of 2019 on <a href="https://dev.to" target="_blank" rel="noopener">dev.to</a> and one time awarded the "weekly must read" badge.'
      />

      <ActivityCard
        title="Open Source"
        image="open-source.svg"
        description='I have released a couple of small open source projects. You can check my work on my <a href="https://github.com/brpaz" target="_blank" rel="noopener">GitHub profile.</a>'
      />
    </div>
  </section>
</template>

<script>
import ActivityCard from '~/components/ActivityCard';
export default {
  name: 'WhatIdo',
  components: {
    ActivityCard
  }
};
</script>
