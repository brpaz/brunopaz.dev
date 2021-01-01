<template>
  <div class="flex md:w-1/2 sm:w-full lg:w-1/3">
    <article
      class="flex flex-col overflow-hidden rounded-md shadow-lg mb-8 mr-4 bg-gray-200"
    >
      <div class="p-1" style="height: 250px; overflow: hidden">
        <nuxt-image
          :placeholder="true"
          :src="getCoverImage(post)"
          class="block"
          style="object-fit: cover"
          aria-hidden="true"
          alt="Post cover image"
        />
      </div>

      <header class="flex flex-col h-52 p-4 flex-grow">
        <h2 class="text-lg mb-4">
          <nuxt-link :to="{ path: `/blog/${post.slug}` }">
            {{ post.title }}
          </nuxt-link>
        </h2>

        <p class="text-sm leading-6 overflow-hidden overflow-ellipsis nowrap">
          {{ post.summary }}
        </p>
      </header>

      <footer class="flex justify-end pr-4 mb-2 mt-4">
        <p class="text-grey-darker text-xs">
          <b>Published on</b>: {{ formatDate(post) }}
        </p>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(post) {
      const dt = new Date(post.date)

      return dt.toLocaleDateString(undefined, {
        month: 'short',
        year: 'numeric',
      })
    },
    getCoverImage(post) {
      if (post.cover) {
        return `/blog/${post.cover}`
      }
      return '/blog/cover-default.jpg'
    },
  },
}
</script>
