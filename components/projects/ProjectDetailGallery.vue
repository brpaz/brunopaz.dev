<template>
  <div
    v-if="images.length > 0"
    class="carousel-wrapper relative flex mx-auto w-4/5 mb-8"
  >
    <client-only>
      <carousel
        :perPage="1"
        :navigationEnabled="true"
        paginationColor="#475569"
        paginationActiveColor="#2563EB"
      >
        <slide
          v-for="image in images"
          :key="image"
          class="w-full flex overflow-hidden border border-blue-300"
        >
          <img :src="`/projects/${image}`" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.VueCarousel-slide {
  @apply min-w-full;
}

.VueCarousel-navigation-button {
  @apply text-blue-600  hidden md:block cursor-pointer !important;
}
</style>
