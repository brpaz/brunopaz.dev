<template>
  <div class="flex flex-wrap w-full">
    <PostCard v-for="post in posts" :key="post.slug" :post="post" />
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
