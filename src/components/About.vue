<template>
  <section id="about" class="container container-lg mx-auto pt-16 pb-16">
    <h2>
      <svg
        class="inline"
        width="48"
        height="48"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
        />
      </svg>
      Who am I?
    </h2>

    <div class="text-justify">
      <g-image
        src="~/assets/images/undraw_on_the_office_fbfs.svg"
        immediate="true"
        class="ml-12 float-right hidden lg:block"
        width="512"
        alt="Hero image"
      />

      <p>Hello, I am Bruno, a Web Engineer, from Porto, Portugal, specialized in PHP, Symfony and Golang.</p>

      <p>Despite my experience or preferences, I always try to keep up to date with other programming languages and frameworks so that I can keep improving my knowledge and skills. I believe in always choosing the best technology for the the job, even if we need to get out of our comfort zone.</p>

      <p>I have a strong focus on software quality, clean code and engineering best practices like TDD and Continuous Delivery.</p>

      <p>I am eager to learn new things. Passionate about tech and programming in general, I have a big interest in everything related to Engineering practices, Agile, CI / CD, DevOps and Automation.</p>

      <p>I believe in tech and programming as a way to improve people lives and the focus should always be in the people!</p>

      <p>You can find more about me at:</p>
      <SocialLinks iconWidth="32" iconHeight="32" listItemClass="mr-4" />
    </div>
  </section>
</template>

<script>
import ActivityCard from '~/components/ActivityCard';
import SocialLinks from '~/components/SocialLinks';
export default {
  name: 'About',
  components: {
    ActivityCard,
    SocialLinks
  }
};
</script>

<style scoped>
#about p {
  @apply mb-4;
}
</style>