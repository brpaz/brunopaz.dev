<template>
  <div class="flex md:w-1/2 sm:w-full lg:w-1/3">
    <article
      class="flex flex-col overflow-hidden rounded-md shadow-lg mb-8 mr-4 bg-gray-200"
    >
      <div class="p-1" style="height: 250px; overflow: hidden">
        <nuxt-image
          :placeholder="true"
          :src="getCoverImage(post, false)"
          class="block"
          aria-hidden="true"
          alt="Post cover image"
        />
      </div>

      <header class="flex flex-col h-52 p-4 flex-grow">
        <h2
          class="text-lg md:h-14 mb-4"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
        >
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
            {{ post.title }}
          </nuxt-link>
        </h2>

        <p
          class="text-sm leading-6"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
        >
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
import blogPost from '~/mixins/blogPost'
export default {
  mixins: [blogPost],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
