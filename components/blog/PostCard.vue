<template>
  <article>
    <div
      class="flex flex-col md:flex-row md:justify-between md:items-center mb-4"
    >
      <h2 class="text-xl flex w-full md:w-4/5 mb-2">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          {{ post.title }}
        </nuxt-link>
      </h2>

      <div class="text-xs md:text-right">{{ formatDate(post) }}</div>
    </div>

    <p class="leading-6">
      {{ post.summary }}
    </p>
  </article>
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
