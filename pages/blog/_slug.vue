<template>
  <div><post :post="post" /></div>
</template>

<script>
import Post from '~/components/blog/Post'
import blogPost from '~/mixins/blogPost'
export default {
  components: { Post },
  mixins: [blogPost],
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.summary,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.summary,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.getCoverImage(this.post, true),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.summary,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getCoverImage(this.post, true),
        },
      ],
    }
  },
}
</script>
