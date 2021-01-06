<template>
  <div class="flex flex-col mx-auto w-4/5 lg:w-2/3">
    <PostCard
      v-for="post in posts"
      :key="post.slug"
      :post="post"
      class="mb-12"
    />
  </div>
</template>

<script>
import PostCard from '~/components/blog/PostCard'
export default {
  components: { PostCard },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
