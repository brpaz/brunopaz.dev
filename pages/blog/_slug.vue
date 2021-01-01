<template>
  <div><post :post="post" /></div>
</template>

<script>
import Post from '~/components/blog/Post'
export default {
  components: { Post },
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  },
}
</script>
