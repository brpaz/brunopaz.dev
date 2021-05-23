<template>
  <article class="w-4/5 lg:w-2/3 mx-auto">
    <page-header :text="post.title" />

    <div class="text-xs text-center mb-2">{{ formatDate(post) }}</div>

    <nuxt-content :document="post" class="mt-8" />

    <div v-if="post.devto_url" class="text-xs">
      This post was cross posted on <a :href="post.devto_url">Dev.to</a>
    </div>

    <social-share :post="post" />
  </article>
</template>

<script>
import PageHeader from '~/components/shared/PageHeader'
import SocialShare from '~/components/blog/SocialShare'
import blogPostMixin from '~/mixins/blogPost'
export default {
  components: { SocialShare, PageHeader },
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
