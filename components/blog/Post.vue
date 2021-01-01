<template>
  <article>
    <nuxt-image
      :placeholder="true"
      :src="getCoverImage(post)"
      class="flex mx-auto w-full mb-8"
      style="object-fit: cover; height: 450px"
    />

    <h1 class="font-bold text-4xl text-secondary-600 mb-8">
      {{ post.title }}
    </h1>

    <nuxt-content :document="post" />

    <social-share :post="post" />
  </article>
</template>

<script>
import SocialShare from '~/components/blog/SocialShare'
import blogPostMixin from '~/mixins/blogPost'
export default {
  components: { SocialShare },
  mixins: [blogPostMixin],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.nuxt-content-highlight {
  @apply relative mb-8;
}
.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}

.nuxt-content h2 {
  @apply font-bold text-2xl mb-4;
}
.nuxt-content h3 {
  @apply font-bold text-lg mb-4;
}
.nuxt-content p {
  @apply mb-4;
}

.nuxt-content img {
  @apply my-4 mx-auto;
}

.nuxt-content ul {
  @apply list-disc ml-6 mb-4;
}

.nuxt-content hr {
  @apply flex w-1/2 mt-12 mb-12 border-blue-300 mx-auto;
}
</style>
